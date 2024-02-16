import express from "express";
import bodyParser from "body-parser";
import employeesRoutes from "./routes/employees.js";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/employees", employeesRoutes);

app.listen(PORT, () => console.log(`Server Running on Port : http://localhost:${PORT}`));
