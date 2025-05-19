//Importo todo lo de la libreria express
import express from "express";
import cookieParser from "cookie-parser";
import productRoutes from "./src/routes/products.js";
import clientsRoutes from "./src/routes/clients.js";
import employeesRoutes from "./src/routes/employees.js";
import branchesRoutes from "./src/routes/branches.js";
import reviewsRoutes from "./src/routes/branches.js";
import registerRoutes from "./src/routes/registerEmployees.js";
import loginRoute from "./src/routes/login.js";
import logoutRoute from "./src/routes/logout.js";
import registerClients from "./src/routes/registerClients.js";
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";
import blogRoutes from "./src/routes/blog.js"
import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";

//Creo una constante que es igual a la libreria que acabo de importar, y la ejecuto

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/products", validateAuthToken(["employee", "admin"]), productRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/reviews",  validateAuthToken(["employee"]), reviewsRoutes);
app.use("/api/registerEmployee", registerRoutes)
app.use("/api/login", loginRoute)
app.use("/api/logout", logoutRoute)

app.use("/api/registerClients", registerClients)
app.use("/api/passwordRecovery", passwordRecoveryRoutes)
app.use("/api/blog", blogRoutes)

//Exporto esta constante para usar express en todos lados
export default app;