import blogModel from "../models/blog.js";
import { v2 as cloudinary } from "cloudinary";

import { config } from "../config.js";

//1- Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
});

//Array de funciones vacio
const blogController = {};

blogController.getAllBLog = async(req,res) => {
    const blogs = await blogModel.find()
    res.json(blogs)
}

//Guardar
blogController.createBlog = async (req,res) => {
    try {
        const { title, content } = req.body;
        let imageUrl = ""

        if(req.file){
            //Subir el archivo a Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path,
                {
                    folder: "public",
                    allowed_formats: ["jpg", "png", "jpeg"]
                }
            )
            imageUrl = result.secure_url
        }

        const newBlog = new blogModel({title, content, image: imageUrl})
        newBlog.save();

        res.json({message: "Blog saved"})

    } catch (error) {
        console.log("error" + error)
    }
}

// Eliminar blog
blogController.deleteBlog = async (req, res) => {
    await blogModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Borrado exitosamente" });
};

// Actualizar blog
blogController.updateBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        let imageUrl = "";

        if (req.file) {
            // Subir el archivo a Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "public",
                allowed_formats: ["jpg", "png", "jpeg"]
            });
            imageUrl = result.secure_url;
        }

        await blogModel.findByIdAndUpdate(
            req.params.id,
            { title, content, image: imageUrl },
            { new: true }
        );
        res.json({ message: "Blog actualizado exitosamente" });
    } catch (error) {
        console.log("error" + error);
    }
};

export default blogController;