import mongoose from "mongoose";
import { nanoid } from "nanoid";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    minPoolSize: 10,
    maxPoolSize: 400,
  });
};

export const db = mongoose.connection.useDb("siswa_db", {
  useCache: true,
});

export const siswaSchema = mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(8),
  },
  no_pendaftaran: String,
  nama_lengkap: String,
  alamat: String,
  email: String,
  tempat_lahir_siswa: String,
  tanggal_lahir_siswa: Date,
  jenis_kelamin: String,
  pilihan: String,
  nik_siswa: String,

  nama_ayah: String,
  tempat_lahir_ayah: String,
  tanggal_lahir_ayah: Date,
  pekerjaan_ayah: String,
  pendidikan_ayah: String,
  penghasilan_ayah: String,
  ktp_ayah: String,

  nama_ibu: String,
  tempat_lahir_ibu: String,
  tanggal_lahir_ibu: Date,
  pekerjaan_ibu: String,
  pendidikan_ibu: String,
  penghasilan_ibu: String,
  ktp_ibu: String,
});
