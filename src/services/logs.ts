import { Request, Response } from 'express';
import { Logs } from '../models/logs';
import * as fs from 'fs';
const { Parser } = require('json2csv');


const createLog = async (id: String, ip: string, time: String, status: Number, req: Request, res: Response) => {

    const log = new Logs({ id: id, ip: ip, time: time, status: status });
    await log.save(log, (err: any) => {
        if (err) console.error(err);
    })

    console.log(log);
}


const generateLogs = async () => {
    const logs = await Logs.find({});
    const fields = ['id', 'ip', 'time', 'status'];
    const opts = { fields };
    try {
        const parser = new Parser(opts);
        const csv = parser.parse(logs);
        fs.writeFile('logs.csv', csv, function(err) {
            if (err) throw err;
                console.log('file saved');
            });
    }catch(e)
    {
        console.log(e);
    }
   
}

module.exports = { createLog, generateLogs }