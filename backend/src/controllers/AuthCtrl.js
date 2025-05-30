import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import clientsModel from '../models/Clients.js';
import employeesModel from '../models/Employees.js';
import { config } from '../config.js';

const authCtrl = {};

authCtrl.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    try {
        const user = await clientsModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jsonwebtoken.sign(
            { id: user._id, email: user.email },
            config.JWT.secret,
            { expiresIn: config.JWT.expiresIn }
        );

        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

authCtrl.getEmployees = async (req, res) => {
    try {
        // Ejemplo: Obtener todos los empleados
        const employees = await employeesModel.findone({ email });
        res.status(200).json(employees);
    } catch (error) {
        console.error('Error al interactuar con employeesModel:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export default authCtrl;