import axios from 'axios';
import cheerio from 'cheerio';
import UUID from 'pure-uuid';
import Path from 'path';
import fs from 'fs';
import { Socket } from '../index';
const sharp = require("sharp");
const { createCanvas, loadImage } = require('canvas')

export class operations {
    formats: any = [];
    
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

            response.data.pipe(writer);

            return new Promise(async (resolve, reject) => {
                await writer.on('finish', (resolve))
                await writer.on('error', (reject))
            }).catch(err => console.log(err));

        } catch (err) {
            console.log('catch', err);
        }
    }
}