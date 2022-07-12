import axios from 'axios';
import cheerio from 'cheerio';
import UUID from 'pure-uuid';
import Path from 'path';
import fs from 'fs';
import { Socket } from '../index';

export class operations {
    constructor() { }

    public static async fetchUrl(url: string) {
        let allImgs = await axios.get(url)
            .then(async (res) => {
                const links = [];
                const $ = cheerio.load(res.data);

                const id = new UUID(4).format();
                const directory = Path.join('.', 'imgs', id);

                if (!fs.existsSync(directory)) {
                    fs.mkdirSync(directory);
                }

                $('img').each((_, image) => {
                    const img = $(image).attr('src');
  
                    if (img) {
                        this.downloadImage(img, directory);
                        Socket.get().emit('new_image', { url: img });
                        links.push({ url: img })
                    }
                  });

                return true;

            }).catch(err => console.error(err))

        return allImgs;
    }

    public static async downloadImage(url: string, directory: string) {
        const id = new UUID(4).format();
        const writer = fs.createWriteStream(directory + '/' + id + '.png');

        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        })

        response.data.pipe(writer);

        return new Promise(async (resolve, reject) => {
            await writer.on('finish', (resolve))
            await writer.on('error', (reject))
        }).catch(err => console.log(err));
    }
}