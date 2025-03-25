import employeeModel from "../models/Employees.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const registerEmployeesController = {};

registerEmployeesController.register = async (req, res) => {
  const { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body;

  try {
    //Verificamos si el empleado ya existe
    const existingEmployee = await employeeModel.findOne({ email });
    if (existingEmployee) {
      return res.json({ message: "Empleado ya existe" });
    }

    //Encriptar la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    //Guardamos el empleado nuevo
    const newEmployee = new employeeModel({ name, lastName, birthday, email, address, hireDate, password: passwordHash, telephone, dui, isssNumber, isVerified });

    await newEmployee.save()

    //--> Token <--
    jsonwebtoken.sign(
        //1-Que voy a guardar
        {id: newEmployee._id},
        //2-Secreto
        config.JWT.secret,
        //3-Cuando expira
        {expiresIn: config.JWT.expiresIn},
        //4-Funcion flecha
        (error, token)=>{
            if(error) console.log(error);
            res.cookie("authToken", token);
            res.json({message: "se inserto esta babosada"});
        }
    )


  } catch (error) {
    console.log(error)
  }
};

export default registerEmployeesController