import mongoose from "mongoose";

interface IResult {
  result: Number;
  message: Number;
}

const resultSchema = new mongoose.Schema({
  result: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

const result = mongoose.model('result', resultSchema);

export { result }