import axios from 'axios';
import cheerio from 'cheerio';
import UUID from 'pure-uuid';
import Path from 'path';
import fs from 'fs';
import { Socket } from '../index';
import { operationsService } from './operations.service';
const sharp = require('sharp');

export class operations {
    formats: any = [];
    static idFolder: string;

    constructor() { }

    public static async fetchUrl(url: string) {

        let allImgs = await axios.get(url)
            .then(async (res) => {
                const $ = cheerio.load(res.data);

                const id = new UUID(4).format();
                const directory = Path.join('.', 'public/imgs', id);
                this.idFolder = id;

                if (!fs.existsSync(directory)) {
                    fs.mkdirSync(directory, { recursive: true });
                }


                $('img').each((_, image) => {
                    const img = $(image).attr('src');

                    if (img) {
                        this.downloadImage(img, directory);
                    }
                });
                return true;

            }).catch(err => console.error(err))

        return allImgs;
    }

    public static async downloadImage(url: string, directory: string) {
        try {

            const id = new UUID(4).format();

            const resp = await axios.get(url, {responseType: 'arraybuffer'})
                .then(response => Buffer.from(response.data, 'binary').toString('base64'));

            try {
                let buff = Buffer.from(resp, 'base64');
    
                await sharp(buff)
                    .grayscale()
                    .toFile(directory + '/' + id + '.png')
                    .then((info: any) => { console.log(info) })
                    .catch((err: any) => { console.log(err) });


                    const urlLocal = `${process.env.LOCALHOST}/public/imgs/${this.idFolder}/${id}.png`;
                    operationsService.insert(url, directory, urlLocal, id);
                    Socket.get().emit('new_image', { url: urlLocal, id: id });

            }catch(err) {
                console.log(err)
            }


        } catch (err) {
            console.log('catch', err);
        }
    }
}