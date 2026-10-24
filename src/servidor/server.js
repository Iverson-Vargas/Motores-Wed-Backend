import express from 'express';
import { config } from '../config/config.js';
import productsRoutes from '../rutas/products.rutas.js';

export class Servidor {
    constructor() {
        this.app = express();
        this.port = config.app.port;
        this.pre = '/api/v1';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(`${this.pre}/products`, productsRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
