import mongoose from "mongoose"

const Siswa = mongoose.model("Siswa", {
  no_pendaftaran: String,
  nama_lengkap: String,
  alamat: String,
  email: String,
  tempat_lahir_siswa: String,
  tanggal_lahir_siswa: Date,
  jenis_kelamin: String,
  pilihan: String,
  // Fields for Ayah
  nama_ayah: String,
  tempat_lahir_ayah: String,
  tanggal_lahir_ayah: Date,
  pekerjaan_ayah: String,
  pendidikan_ayah: String,
  penghasilan_ayah: String,
  ktp_ayah: String, // Assuming you store a file path or URL

  // Fields for Ibu
  nama_ibu: String,
  tempat_lahir_ibu: String,
  tanggal_lahir_ibu: Date,
  pekerjaan_ibu: String,
  pendidikan_ibu: String,
  penghasilan_ibu: String,
  ktp_ibu: String, // Assuming you store a file path or URL
})

export const getSiswa = async (req, res) => {
  try {
    const siswaList = await Siswa.find()
    res.status(200).json({
      message: "success",
      data: siswaList,
    })
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    })
  }
}

export const createSiswa = async (req, res) => {
  try {
    console.log(req.body)
    // Create a new Contact document using the form data
    const newSiswa = new Siswa(req.body)

    // Save the document to the MongoDB database
    const savedSiswa = await newSiswa.save()

    res.status(201).json({
      message: "success",
      data: savedSiswa,
    })
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    })
  }
}

export const updateSiswa = async (req, res) => {
  const { id } = req.params

  try {
    const updatedSiswa = await Siswa.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    if (!updatedSiswa) {
      return res.status(404).json({
        message: "error",
        error: "Siswa not found",
      })
    }

    res.status(200).json({
      message: "success",
      data: updatedSiswa,
    })
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    })
  }
}

export const deleteSiswa = async (req, res) => {
  const { id } = req.params

  try {
    const deletedSiswa = await Siswa.findByIdAndDelete(id)

    if (!deletedSiswa) {
      return res.status(404).json({
        message: "error",
        error: "Siswa not found",
      })
    }

    res.status(200).json({
      message: "success",
      data: deletedSiswa,
    })
  } catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message,
    })
  }
}
