import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3309,
    database: 'mi_utem'
}) 