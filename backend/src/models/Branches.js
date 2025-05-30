import {Schema, model} from "mongoose";

const branchesSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    telephone: {
        type: Number,
        require: true,
        min: 0
    },
    schedule: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("branches", branchesSchema)