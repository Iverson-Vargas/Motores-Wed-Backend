import express from 'express';
import { config } from '../config/config.js';
import productsRoutes from '../rutas/products.rutas.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../config/swagger-output.json' with { type: 'json' };



export class Servidor {
    constructor() {
        this.app = express();
        this.port = config.app.port;
        this.pre = '/api/v1';

        this.middlewares();
        this.routes();
        this.swagger();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(`/api/v1/products`, productsRoutes);
    }

    swagger() {
        this.app.use('/docs', 
            swaggerUi.serve, 
            swaggerUi.setup(swaggerSpec, {
                    swaggerOptions: {
                        deepLinking: false 
                    }
                }
            )
        );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto http://localhost:${this.port}`);

            console.log(`Documentación disponible en http://localhost:${this.port}/docs`);
        });

    }
}
