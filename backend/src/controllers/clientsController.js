const  clientsController = {};
import clientsModel from "../models/clients.js"

//SELECT
clientsController.getClient = async (req, res) => {
   const products = await clientsModel.find()
   res.json(products)
}

//INSERT
clientsController.insertClient = async (req, res) => {
    const { name, lastName, birthday, email, password, telephone, dui, isVerified } = req.body;
    const newClient = new clientsModel({ name, lastName, birthday, email, password, telephone, dui, isVerified })
    await newClient.save()
    res.json({message: "Client saved"})
}

//DELETE
clientsController.deleteClient = async (req, res) => {
    await clientsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Deleted successfully"})
}

//UPDATE
clientsController.updateClient = async (req, res) => {
    const { name, lastName, birthday, email, password, telephone, dui, isVerified } = req.body;
    const updateClient = await clientsModel.findByIdAndUpdate(req.params.id,
        {name, lastName, birthday, email, password, telephone, dui, isVerified}, {new: true}
    )
    res.json({message: "Client updated successfully"})
}

export default clientsController;