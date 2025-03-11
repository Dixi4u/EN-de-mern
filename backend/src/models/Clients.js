
import {Schema, model} from "mongoose";

const clientSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    birthday: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    telephone: {
        type: String,
        strict: true,
        min: 0,
        max: 8
    },
    dui: {
        type: String,
        strict: true
    },
    isVerified: {
        type: Boolean,
        strict: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("clients", clientSchema)