import { createPool } from "mysql2/promise";
import {config} from "dotenv";
config();

const pool = createPool({
    host:process.env.HOST,
    port:process.env.PORT,
    user:process.env.USER,
    password:process.env.PASSWORD,
    basedatos:process.env.BASEDATOS
})

export default pool;