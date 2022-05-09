import mongoose from "mongoose";

interface ICalc {
  a: Number;
  b: Number;
  result: Number;
}

const calcSchema = new mongoose.Schema({
  a: {
    type: Number,
    required: true
  },
  b: {
    type: Number,
    required: true
  },
  result: {
    type: Number,
    required: false
  },
  id: {
    type: String,
    required: false
  }
})

const Calc = mongoose.model('Calc', calcSchema);

export { Calc }