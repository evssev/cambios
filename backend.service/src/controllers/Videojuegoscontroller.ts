import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Videojuegos} from "../entities/Videojuegos";

const videojuegosRepository = AppDataSource.getRepository(Videojuegos);

export const getAllVideojuegos = async(red: Request, res: Response) => {
  try {
    const videojuegos = await videojuegosRepository.find();
    res.json(videojuegos);
  } catch(error) {
    res.status(500).json({ message: "Error al obtener Videojuegos." });
  }
};

export const getVideojuegosById = async(req: Request, res: Response) => {
  try {
    const videojuegos = await videojuegosRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(videojuegos) {
      res.json(Videojuegos);
    } else {
      res.status(404).json({ message: "Videojuego no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtener el Videojuegos." });
  }
};

export const createVideojuegos = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const videojuegos = new Videojuegos();
    videojuegos.name = name;
    videojuegos.description = description;
    videojuegos.price = price;

    await videojuegosRepository.save(videojuegos);
    res.status(201).json(videojuegos);
  } catch(error) {
    res.status(500).json({ message: "Error al crear el videojuego." });
  }
};

export const updateVideojuegos= async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const videojuegos = await videojuegosRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(videojuegos) {
      videojuegos.name = name ?? videojuegos.name;
      videojuegos.description = description ?? videojuegos.description;
      videojuegos.price = price ?? videojuegos.price;

      await videojuegosRepository.save(videojuegos);
      res.json(videojuegos);
    } else {
      res.status(404).json({ message: "Videojuego no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al actualizar el Videojuego." });
  }
};

export const deleteVideojuegos = async(req: Request, res: Response) => {
  try {
    const videojuegos = await videojuegosRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (videojuegos) {
      await videojuegosRepository.remove(videojuegos);
      res.json({ message: "Videojuego eliminado." });
    } else {
      res.status(404).json({ message: "Videojuego no encontrado." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar el Videojuego." });
  }
};