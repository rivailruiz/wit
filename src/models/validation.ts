import mongoose from "mongoose";

interface Ivalidation {
  a: Number;
  b: Number;
}

const validationSchema = new mongoose.Schema({
  sucess: {
    type: Boolean,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

const validate = mongoose.model('validate', validationSchema);

export { validate }