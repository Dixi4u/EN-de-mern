import faqsModel from "../models/Faqs.js";

const faqsController = {};

//SELECT
faqsController.getAllFaqs= async (req, res) => {
    try {
        const faqs = await faqsModel.find()
        res.status(200).json(faqs)
    } catch (error) {
        console.log("error" + error)
        res.status(500).json({message: "Error finding faqs"})
    }
}

//INSERT
faqsController.insertFaqs = async (req, res) => {
    const { question, answer, level, isActive } = req.body;

    try {
        if(!question || !answer || !level || !isActive ){
            return res.status(400).json({message: "Ingrese todos los datos"})
        }

        if(level > 5 || level < 1){
            return res.status(400).json({message: "Ingrese un valor correcto"})
        }

        //Guardar en basede datos
        const newFaqs = new faqsModel({
            question, answer, level, isActive
        })

        newFaqs.save()

        res.status(200).json({message: "Faqs inserted"})

    } catch (error) {
        console.log("error" + error)
        res.status(500).json({message: "Error inserting faqs"})
    }
}

//ACTUALIZAR
faqsController.updateFaqs = async (req, res) => {
    try {
        const { question, answer, level, isActive } = req.body;

        if(level > 5 || level < 1){
            return res.status(400).json({message: "Ingrese un valor correcto"})
        }

        //Actuakizar los datos en la BD
        const updateFaqs = await faqsModel.findByIdAndUpdate(
            req.params.id,
            {question, answer, level, isActive},
            {new: true}
        )


        if(!updateFaqs){
            return res.status(400).json({message: "Faqs not found"})
        }

        res.status(200).json({message: "Faqs updated succesfully"})
    } catch (error) {
        console.log
        ("error" + error)
        res.status(400).json({message: "Error updating faqs"})
    }
}

//ELIMINAR
faqsController.deleteFaqs = async (req,res) => {
    try {
        const deletedFaqs = await faqsModel.findByIdAndDelete(
            req.params.id
        )

        if(!deletedFaqs){
            return res.status(400).json({message: "faqs not found"})
        }

        res.status(200).json({message: "faqs deleted"})
    } catch (error) {
        console.log("error" + error)
        res.status(400).json({message: "error"})
    }
}

export default faqsController