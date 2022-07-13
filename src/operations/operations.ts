import axios from 'axios';
import cheerio from 'cheerio';
import UUID from 'pure-uuid';
import Path from 'path';
import fs from 'fs';
import { Socket } from '../index';
const sharp = require("sharp");

let formats: any = [];
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
                    fs.mkdirSync(directory, { recursive: true });
                }


                $('img').each((_, image) => {
                    const img = $(image).attr('src');

                    if (img) {
                        this.downloadImage(img, directory);
                        Socket.get().emit('new_image', { url: img, id: id });
                        links.push({ url: img })
                    }
                });
                console.log(formats);
                return true;

            }).catch(err => console.error(err))

        return allImgs;
    }

    public static async downloadImage(url: string, directory: string) {
        try {

            const id = new UUID(4).format();
            const writer = fs.createWriteStream(directory + '/' + id + '.png');

            const response = await axios({
                url,
                method: 'GET',
                responseType: 'stream'
            })

            formats.push(response.headers['content-type']);
            console.log('**********1**********')
            const unsuportedFiles = ['image/webp', 'webp', 'image/svg+xml']
            if(!unsuportedFiles.includes(response.headers['content-type'])){
                // const imageSharp = new sharp(directory + '/' + id + '.png', {failOn: 'none'})
                const imageSharp = await sharp(directory + '/' + id + '.png');
                let aaa = await imageSharp.metadata();
                console.log(aaa);
                console.log('**********2**********')
                imageSharp.greyscale();
                imageSharp.toFile(directory + '/gray-' + id + '.png');
            }
            
            // response.data.pipe(writer);

            return new Promise(async (resolve, reject) => {
                await writer.on('finish', (resolve))
                await writer.on('error', (reject))
            }).catch(err => console.log(err));

        } catch (err) {
            console.log('catch', err);
        }
    }
}