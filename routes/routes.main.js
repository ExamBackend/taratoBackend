import {Router} from "express";
const rutamain = Router();
rutamain.get("/",(req,res)=>{
    res.json("Ruta principal")
});

export default rutamain;