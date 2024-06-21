import express from 'express';
import { pool } from './db.js';
import cors from 'cors';

const app = express();

app.use(cors())

app.use(express.json());

app.get('/notas', async (req, res) => {
    const [resultado] = await pool.query('select * from nota');
    res.send(resultado);
})


app.get('/notas/:rut', async (req, res) => {
    const [resultado] = await pool.query('select * from nota where rut_alumno = ?', [req.params.rut]);
    res.send(resultado);
})

app.post('/notas', async (req, res) => {
    const { id_nota, rut_alumno, nota } = req.body
    const [resultado] = await pool.query('insert into nota (id_nota,rut_alumno,nota) values(?,?,?)', [id_nota, rut_alumno, nota]);
    res.send(resultado);
})

app.delete('/notas/:id', async (req, res) => {
    const [resultado] = await pool.query('delete from nota where id_nota = ?', [req.params.id]);
    res.sendStatus(204);
})

app.put('/notas/:id', async (req, res) => {
    const { nota } = req.body;

    const [resultado] = await pool.query('update nota set nota = ? where id_nota = ?', [nota, req.params.id])

    pool.query('select * from nota where id_nota = ?', [req.params.id])

    res.json('actualizado');

})





app.listen(3000);
console.log("servidor en el puerto 3000");
