import swaggerAutogen from 'swagger-autogen';
import { config } from './config/config.js';

const doc = {
    info: {
        title: 'API Motores Web',
        description: 'Documentación oficial de la API generada automáticamente'
    },
    servers:[
        {
            url: `http://localhost:${config.app.port}`,
            description: 'Servidor local de desarrollo'
        }
    ]
};

const outputFile = './src/config/swagger-output.json';
// Los archivos que contienen o cargan tus rutas
const routes = ['./src/servidor/server.js'];

/* Genera el archivo swagger-output.json */
swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc);
