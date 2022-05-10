import { Request, Response } from 'express';
import { Logs } from '../models/logs';
const { performance } = require('perf_hooks');

const createLog = async (id: String, ip: string, time: String, status: Number, req: Request, res: Response) => {

    const log = new Logs({ id: id, ip: ip, time: time, status: status });
    await log.save(log, (err: any) => {
        if (err) console.error(err);
    })

    console.log(log);
}

module.exports = { createLog }