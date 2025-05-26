import customersModel from "../models/Clients.js";
import employeesModel from "../models/Employees.js";
import bcrypt from "bcryptjs";
import jsonWebToken  from "jsonwebtoken";
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) =>{
    const {email, password} = req.body;

    try {
    
        let userFound; //variable para guardar el usuario encontrado
        let userType; //Para guardar tipo de usuario encontrado

        //1-Admin
        if(email === config.emailAdmin.email && password === config.emailAdmin.password){
            userType = "admin",
            userFound = {_id: "admin"}
        }
        //2-Empleado
        else{
            userFound = await employeesModel.findOne({email})
            userType = "employee"

            if(!userFound){
                userFound = await customersModel.findOne({email})
                userType = "customer"
            }
        }
        
        if(!userFound){
            console.log("No hay bicho, no existe")
            return res.json({message: "User not found"})
        }

        if(userType !== "admin"){
            //Veamos si la contraseña que están escribiendo en el login es la la misma que esta en la BD(Encriptada)
            const isMatch = bcrypt.compare(password, userFound.password)
            if(!isMatch){
                return res.json({message: "Contraseña incorrecta"})
            }
        }

        // --> Token <--

        jsonWebToken.sign(
            //1-Que voy a guardar
            {id: userFound._id, userType},
            //2-Secreto
            config.JWT.secret,
            //3-Cuando expira
            {expiresIn: config.JWT.expiresIn},
            //4-Funcion flecha
            (error, token)=>{
                if(error) console.log(error);
                res.cookie("authToken", token);
                res.json({message: "Login successful"});
            }
        )
    

    } catch (error) {
        console.log(error)
    }
}

export default loginController