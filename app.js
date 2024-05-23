import express from "express";
import {config} from "dotenv";
import ruta from "./routes/index.js";
config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))
app.use("/", ruta)
app.set("puerto", process.env.PUERTO || 8000)
app.use("/",ruta)