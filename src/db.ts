import mongoose from 'mongoose';

export class database {
    db: any;

    constructor() { }

    init(): void {
        console.log('init DB')
        this.db = mongoose.connect('mongodb://localhost:27017/55pbx')
            .then(
                () => { console.log('connected to mongodb ') },
                err => { console.log(err) }
            )

        mongoose.connection.on('connected', () => console.log('Connected db'));
        mongoose.connection.on('error', (err) => console.log('Connection failed with - ', err));
        mongoose.set('debug', true);
    }

    get() {
        if (!this.db) {
            throw new Error("DB is not initialized");
        }
        return this.db;
    }


}

