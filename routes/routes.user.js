import {Router} from "express";
import { eliminarproveedor, insertarproveedor, modificarproveedor, mostrarproveedor, mostrarproveedores } from "../controllers/controllers.use";

const rutausuario = Router();

rutausuario.get("/user/:id", mostrarproveedor)
rutausuario.post("/user", insertarproveedor)
rutausuario.put("/user", modificarproveedor)
rutausuario.delete("/user/:id", eliminarproveedor)
rutausuario.get("/user", mostrarproveedores)
