import { Router } from "express";
import {
  getAllVideojuegos,
  getVideojuegosById,
  createVideojuegos,
  updateVideojuegos,
  deleteVideojuegos,
} from "../controllers/Videojuegoscontroller";

const videojuegosRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Videojuegos
 *   description: CRUD relacionado con videojuegos
 */

/**
 * @swagger
 * /api/videojuegos:
 *   get:
 *     summary: Obtener todos los videojuegos
 *     tags: [videojuegos]
 *     responses:
 *       200:
 *         description: Lista de videojuegos
 */
videojuegosRoutes.get("/", getAllVideojuegos);

/**
 * @swagger
 * /api/videojuegos/{id}:
 *   get:
 *     summary: Obtener un videojuego por ID
 *     tags: [videojuegos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del videojuego
 *     responses:
 *       200:
 *         description: Detalles del videojuego
 *       404:
 *         description: Videojuego no encontrado
 */
videojuegosRoutes.get("/:id", getVideojuegosById);

/**
 * @swagger
 * /api/videojuegos:
 *   post:
 *     summary: Crear un nuevo Videojuegos
 *     tags: [Videojuegos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Videojuego creado
 *       500:
 *         description: Error en el servidor
 */
videojuegosRoutes.post("/", createVideojuegos);

/**
 * @swagger
 * /api/videojuegos/{id}:
 *   put:
 *     summary: Actualizar un videojuego existente
 *     tags: [videojuegos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del videojuego
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Videojuegos actualizado
 *       404:
 *         description: Videojuego no encontrado
 *       500:
 *         description: Error en el servidor
 */
videojuegosRoutes.put("/:id", updateVideojuegos);

/**
 * @swagger
 * /api/videojuegos/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Videojuegos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del videojuego
 *     responses:
 *       200:
 *         description: Videojuego eliminado
 *       404:
 *         description: Videojuego no encontrado
 *       500:
 *         description: Error en el servidor
 */
videojuegosRoutes.delete("/:id", deleteVideojuegos);

export default videojuegosRoutes;