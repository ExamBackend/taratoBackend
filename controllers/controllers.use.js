import pool from "../config/db.config.js";
import { completado,error } from "../message/browser.js";
import bcrypt from "bcrypt";

export const insertarproveedor=async(req,res)=>{
    const cliente = req.body.cliente;
    const factura = req.body.factura;
    const producto = req.body.producto;

    try {
        const respuesta = await pool.query(`CALL sp_insertarproveedor ('${cliente}','${factura}','${producto}')`)
        completado(req.res,200,"proveedor insertado correctamente")
    } catch (err) {
        error(req,res,200,"proveedor insertado incorrectamente")
    } 
}

export const mostrarproveedores=async(req,res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_mostrarproveedores()`);
        completado(req,res,200,respuesta[0]);
    } catch (err) {
        error(req,res,500,err)
    }
}

export const modificarproveedor=async(req,res)=>{
    const id = req.body.id;
    const cliente = req.body.cliente;
    const factura = req.body.factura;
    const producto = req.body.producto;

    try {
        const respuesta = await pool.query(`CALL sp_modificarproveedor ('${id}','${cliente}','${factura}','${producto}')`);
        completado(req.res,200,"proveedor insertado correctamente")
    if(respuesta [0].affectedRows==1){
        completado(req,res,200, "proveedor modificado");
    }else{
        completado(req,res,200, "no se pudo modificar");
    }
    } catch (err) {
        error(req,res,400,err)
    } 
}

export const mostrarproveedor = async (req,res)=>{
    const id = req.params ['id'];
    try {
        const respuesta = await pool.query(`CALL sp_mostrarproveedor('${id}')`);
        completado(req,res,200,respuesta[0])
    } catch (err) {
        error (req,resm500,err)
    }
}

export const eliminarproveedor = async (req,res)=>{
    const id = req.params ['id'];
    try {
        const respuesta = await pool.query(`CALL sp_eliminarproveedor('${id}')`);
        completado(req,res,200,respuesta[0])
    } catch (err) {
        error (req,resm500,err)
    }
}

