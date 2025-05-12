/*
Colección: Blog

Campos:
tittle
content
image
*/ 

import {Schema, model} from "mongoose";

const blogSchema = new Schema(
    {
        tittlw: {
            type: String
        },
        content: {
            type: String
        },
        image: {
            type: String
        }
    }, {
        timestamps: true,
        strict: false
    }
)

export default model("blog", blogSchema);