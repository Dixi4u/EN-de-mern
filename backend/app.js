//Importo todo lo de la libreria express
import express from "express";
import productRoutes from "./src/routes/products.js"

//Creo una constante que es igual a la libreria que acabo de importar, y la ejecuto
const app = express();

app.use("/api/products", productRoutes);

//Exporto esta constante para usar express en todos lados
export default app;