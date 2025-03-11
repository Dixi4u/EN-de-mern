const  branchesController = {};
import branchesModel from "../models/Branches.js"

//SELECT
branchesController.getBranches = async (req, res) => {
   const products = await branchesModel.find()
   res.json(products)
}

//INSERT
branchesController.insertBranches = async (req, res) => {
    const { name, address, telephone, schedule } = req.body;
    const newProduct = new branchesModel({ name, address, telephone, schedule })
    await newProduct.save()
    res.json({message: "Product saved"})
}

//DELETE
branchesController.deleteBranches = async (req, res) => {
    await branchesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Deleted successfully"})
}

//UPDATE
branchesController.updateBranches = async (req, res) => {
    const { name, address, telephone, schedule } = req.body;
    const updateProducts = await branchesModel.findByIdAndUpdate(req.params.id,
        {name, address, telephone, schedule}, {new: true}
    )
    res.json({message: "product updated successfully"})
}

export default branchesController;