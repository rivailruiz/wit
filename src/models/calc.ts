import mongoose from "mongoose";

interface ICalc {
  a: Number;
  b: Number;
}

const calcSchema = new mongoose.Schema({
  a: {
    type: Number,
    required: true
  },
  b: {
    type: Number,
    required: true
  }
})

const Calc = mongoose.model('Calc', calcSchema);

export { Calc }