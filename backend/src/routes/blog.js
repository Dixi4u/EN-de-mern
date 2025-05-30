import blogController from "../controllers/blogController.js"
import express from "express"
import multer from "multer"

const router = express.Router()

//Configurar una carpeta local que guarde las imagenes
const upload = multer({dest: "public/"})

router.route("/")
  .get(blogController.getAllBLog)
  .post(upload.single("image"), blogController.createBlog);

router.route("/:id")
  .put(upload.single("image"), blogController.updateBlog)
  .delete(blogController.deleteBlog);

export default router