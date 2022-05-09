import mongoose from "mongoose";

interface ICalc {
    operative1: Number;
    operative2: Number;
}

const calcSchema = new mongoose.Schema({
    operative1: {
        type: Number,
        required: true
    },
    operative2: {
        type: Number,
        required: true
    }
})

const build = (attr: ICalc) => {
    return new Calc(attr);
}

build({operative1: 2, operative2: 2});

const Calc = mongoose.model('Calc', calcSchema);

export { Calc }