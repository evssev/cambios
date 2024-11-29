import swaggerJsdoc, { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Service API",
      version: "1.0.0",
      description: "API para Catálogo de Videojuegos y Gestión de Pedidos",
    },
    servers: [
      {
        url: "http://localhost:3000/api/videojuegos",
      },
    ],
  },
  apis: ["./src/routes/videojuegosRoutes.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;