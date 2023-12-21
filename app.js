import express from "express";
import cors from "cors";
import { connectDB, db, siswaSchema } from "./db.js";
import {
  getSiswa,
  getSiswaById,
  createSiswa,
  updateSiswa,
  deleteSiswa,
} from "./api.js";
import "dotenv/config";

connectDB();

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.get("/daftar", getSiswa);
app.get("/daftar/:id", getSiswaById);
app.post("/daftar", createSiswa);
app.patch("/daftar/:id", updateSiswa);
app.delete("/daftar/:id", deleteSiswa);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is listening on http://localhost:${process.env.PORT || 3000}`
  );
});
