import {Router} from "express";
import rutamain from "./routes.main,js";
import rutausuario from "./routes.user.js";

const ruta =Router();
ruta.use("/", rutamain)
ruta.use("/",rutausuario)

export default ruta;
