import mongoose from "mongoose";

interface ILogs {
  id: String;
  ip: String;
  time: Date;
  status: String;
}

const logsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
})

const Logs = mongoose.model('Logs', logsSchema);

export { Logs }