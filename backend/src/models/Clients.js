import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

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
    },

    loginAttemps:{
        type: Number,
        default: 0
    },

    lockTime: {
        type: Date,
        default: null
    }

}, {
    timestamps: true,
    strict: false
})

// Check if the model already exists before defining it
const ClientModel = models.clients || model("clients", clientSchema);

export default ClientModel;