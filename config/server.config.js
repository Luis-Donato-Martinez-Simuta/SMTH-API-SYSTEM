import path from 'path';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const option = dotenv.config({
    path: path.resolve(__dirname, '../environments/.env'),
});

export const databaseConfig = {
    HOST : process.env.HOST,
    USERNAME : process.env.USER,
    PASSWPRD : process.env.PASSWPRD,
    DATABASE: process.env.DATABASE,
    PORT : process.env.PORT,
}

export const serveConfig = {
    PORT_SERVE_API : process.env.PORT_SERVE_API,    
}

export const userConfig = {
    SECRET : process.env.SECRET,
}

export const URL = {
    URL_API_USER : process.env.URL_API_USER,
}
