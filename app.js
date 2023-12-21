import express from "express"
import cors from "cors"
import { connectDB } from "./db.js"
import { getSiswa, createSiswa, updateSiswa, deleteSiswa } from "./api.js"

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API routes
app.get("/daftar", getSiswa)
app.post("/daftar", createSiswa)
app.patch("/daftar/:id", updateSiswa)
app.delete("/daftar/:id", deleteSiswa)

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is listening on http://localhost:${process.env.PORT || 3000}`,
  )
})