import mongoose from "mongoose";

interface Ivalidation {
    operative1: Number;
    operative2: Number;
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

const build = (attr: Ivalidation) => {
    return new validate(attr);
}

const validate = mongoose.model('validate', validationSchema);

export { validate }