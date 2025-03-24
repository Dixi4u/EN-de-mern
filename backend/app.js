//Importo todo lo de la libreria express
import express from "express";
import cookieParser from "cookie-parser";
import productRoutes from "./src/routes/products.js"
import clientsRoutes from "./src/routes/clients.js"
import employeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import reviewsRoutes from "./src/routes/branches.js"
import registerRoutes from "./src/routes/registerEmployees.js"

//Creo una constante que es igual a la libreria que acabo de importar, y la ejecuto

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/registerEmployee", registerRoutes)


//Exporto esta constante para usar express en todos lados
export default app;