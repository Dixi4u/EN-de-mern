import Sales from "../models/sales.js";
import sales from "../models/Sales.js";
import salesModel from "../models/sales.js";

//Array de funciones vacias
const salesController = {};

//Select
salesController.getAllSales= async (res, req) => {
    try {
        const sale = await salesModel.find();
        res.status(200).json(sales)
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
}

//Insert
salesController.insertSales = async (req, res) => {
    try {
        //Solicitar los dates
        const { product, category, customer, total } = req.body;

        if (total < 0){
            return res.status(400).json({message: "Insert valid values"})
        }

        //Guardamos en la base de datos
        const newSales = new salesModel({ product, category, customer, total})
        await newSales.save();

        res.status(200).json({message: "Sales saved correctly"})
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
}


// ================================
// Ventas que tiene cada categoria
// ================================

salesController.getSalesByCategory = async (req, res) => {
    try {

        const resultado = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$category",
                        totalventas: {$sum: "$total"}
                    }
                },

                {
                    $sort: { totalventas: -1 }
                }
            ]
        )

        res.status(200).json(resultado)
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})        
    }
}

// =======================
// Productos mas vendidos
// =======================

salesController.getMostSelledProducts = async (req, res) => {
    try {
        
        const resultado = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$product",
                        totalventas: { $sum: 1}
                    }
                },

                {
                    $sort: { totalventas: -1 }
                },

                {
                    $limit: 3
                }
            ]
        )


        res.status(200).json(resultado)

    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})        
    }
}

// =======================
// Ganancias totales
// =======================

salesController.totalEarnings = async (req, res) => {
    try {

        const resultado = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: null,
                        gananciasTotales: { $sum: "$total" }
                    }
                }
            ]
        )

        res.status(200).json(resultado)
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})        
    }
}

export default salesController;