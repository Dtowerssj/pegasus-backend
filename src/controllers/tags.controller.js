import queries from "../utils/queries";
import { conn } from "../utils/db";
import { Request, Response } from "express";

export const getTags = async (req, res) => {
  try {
    const response = await conn.query(queries.getTags);
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server error");
  }
};

export const getTagsbyId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.getTagsbyId, [id]);
    return res.json(response.rows);
  } catch {
    console.log(error);
    res.status(500);
  }
};

export const createTags = async (req, res) => {
  const task = await conn.connect();

  try {
    const { nombre, color } = req.body;
    const response = await task.query(queries.createTags, [nombre, color]);
    res.status(200).json(response.rows);
  } catch {
    res.status(500);
  } finally {
    task.release(true);
  }
};

export const updateTags = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre } = req.body;
    const { color } = req.body;
    const response = await conn.query(queries.updateTags, [id, nombre, color]);
    return res.status(200).json(`Tag ${id} actualizado satisfactoriamente`);
  } catch {
    res.status(500);
  }
};

export const deleteTags = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await conn.query(queries.deleteTags, [id]);
    return res.status(200).json(`Tag ${id} eliminado satisfactoraimente`);
  } catch {
    res.status(500);
  }
};

module.exports = {
  getTags,
  getTagsbyId,

  createTags,

  updateTags,

  deleteTags,
};
