//Importo todo lo de la libreria express
import express from "express";
import productRoutes from "./src/routes/products.js"
import clientsRoutes from "./src/routes/clients.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"

//Creo una constante que es igual a la libreria que acabo de importar, y la ejecuto
const app = express();
app.use(express.json());


app.use("/api/products", productRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/branches", branchesRoutes);


//Exporto esta constante para usar express en todos lados
export default app;