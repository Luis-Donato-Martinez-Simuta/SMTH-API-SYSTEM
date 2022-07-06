// Dependencias
import express from 'express';
import cors from 'cors';

// Objertos creados
import './database/mysql.database.js';
import systemRouter from './routes/System.routes.js';
import {serveConfig} from './config/server.config.js'


let PORT = serveConfig.PORT_SERVE_API;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/system',systemRouter)

app.listen(PORT, async () => {
    console.log("Servidor corriendo en el puerto", PORT)     
});