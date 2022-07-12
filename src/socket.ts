
import * as socketio from "socket.io";

export class socket {
    io: any;

    constructor(public httpserver: any) { }

    init(): void {
        console.log('init')
        this.io = new socketio.Server(this.httpserver, {
            cors: {
                origin: "http://localhost:8080",
                methods: ["GET", "POST"],
                credentials: true
            },
            allowEIO3: true
        });
    }

    get() {
        if (!this.io) {
            throw new Error("socket is not initialized");
        }
        return this.io;
    }

    listen() {
        this.io.on('connection', () => {
            console.log('a user connected');
        });

    }


}

