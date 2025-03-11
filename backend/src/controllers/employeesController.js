const  employeesController = {};
import employeesModel from "../models/Employees.js"

//SELECT
employeesController.getEmployees = async (req, res) => {
   const employees = await employeesModel.find()
   res.json(employees)
}

//INSERT
employeesController.insertEmployees = async (req, res) => {
    const { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body;
    const newClient = new employeesModel({ name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified })
    await newClient.save()
    res.json({message: "Client saved"})
}

//DELETE
employeesController.deleteEmployees = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Deleted successfully"})
}

//UPDATE
employeesController.updateEmployees = async (req, res) => {
    const { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body;
    const updateClient = await employeesModel.findByIdAndUpdate(req.params.id,
        {name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified}, {new: true}
    )
    res.json({message: "Client updated successfully"})
}

export default employeesController;