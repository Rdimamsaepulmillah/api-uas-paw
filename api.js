import mongoose from "mongoose";
import { db, siswaSchema } from "./db.js";

const checkSiswaDb = () => {
  if (!db.models["Siswa"]) {
    db.model("Siswa", siswaSchema);
  }
};

export const getSiswa = async (req, res) => {
  try {
    checkSiswaDb();

    const siswaList = await db.model("Siswa").find();

    res.status(200).json({
      message: "success",
      data: siswaList,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};

export const createSiswa = async (req, res) => {
  try {
    checkSiswaDb();
    // Create a new Contact document using the form data
    const newSiswa = await db.model("Siswa").create(req.body);

    res.status(201).json({
      message: "success",
      data: newSiswa,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};

export const updateSiswa = async (req, res) => {
  const { id } = req.params;

  try {
    checkSiswaDb();

    const updatedSiswa = await db.model("Siswa").updateOne(
      {
        _id: id,
      },
      req.body
    );

    if (!updatedSiswa) {
      return res.status(404).json({
        message: "error",
        error: "Siswa not found",
      });
    }

    res.status(200).json({
      message: "success",
      data: updatedSiswa,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};

export const deleteSiswa = async (req, res) => {
  const { id } = req.params;

  try {
    checkSiswaDb();

    const deletedSiswa = await db.model("Siswa").findOne({ _id: id });

    if (!deletedSiswa) {
      return res.status(404).json({
        message: "error",
        error: "Siswa not found",
      });
    }

    await db.model("Siswa").deleteOne({ _id: id });

    res.status(200).json({
      message: "success",
      data: deletedSiswa,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};
