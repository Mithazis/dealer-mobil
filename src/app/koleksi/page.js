"use client"
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const carData = [
  {
    id: "Mercy E300",
    name: "Mercedes-Benz E300 SportStyle 2019",
    type: "sedan",
    image: "/images/Mercy-E300/mercy1.jpeg",
    desc: " sedan mewah dengan performa tinggi dan kenyamanan premium. Dilengkapi mesin 2.0L Turbo, interior kulit elegan, panoramic sunroof, dan fitur keselamatan canggih. ",
    price: "Rp 575.000.000 | Nego",
  },
  {
    id: "wrangler sahara",
    name: "Jeep wrangler sahara 2013",
    type: "suv",
    image: "/images/Sahara-2013/sahara.jpeg",
    desc: "Tampil keren dan siap diajak kemana aja. Mesin V6 bertenaga, 4x4 aktif, atap bisa dibuka, dan fitur lengkap buat jalanan kota sampai off-road. Kondisi oke banget, langsung gas tanpa pikir panjang!",
    price: "Rp 885.000.000 | Nego",
  },
  {
    id: "BMW",
    name: "BMW M4 Coupe 2022",
    type: "sedan",
    image: "/images/BMW-M4-coupe-2022/BMWM42022.jpg",
    desc: "Elegant di jalan buas di lintasan. Mesin Twin-Turbo, fitur lengkap, dan sensasi berkendara maksimal. Cocok buat kamu yang suka tampil beda",
    price: "OP: 2.150.000.000",
  },
  {
    id: "wrangler jk",
    name: "Wrangler jk sport 2022",
    type: "suv",
    image: "/images/wrangler-jk/wrangler-jk.jpg",
    desc: "SUV 4x4 legendaris dengan desain ikonik dan performa tinggi. Mesin 3.6L V6, transmisi otomatis, hardtop bisa dilepas, dan ground clearance tinggi. Cocok buat yang suka gaya hidup aktif & petualangan. Kondisi siap pakai!",
    price: "OP: 1.650.000.000",
  },
];

export default function KoleksiPage() {
  const [filter, setFilter] = useState("all");

  const filteredCars =
    filter === "all"
      ? carData
      : carData.filter((car) => car.type === filter);

  return (
    <>
      <Head>
        <title>Koleksi Mobil</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-[#0f2027] text-white min-h-screen px-6 py-10 font-[Poppins]">
        <h1 className="text-center text-3xl font-bold text-[#00ffcc] mb-6">
          Koleksi Mobil Kami
        </h1>

        <div className="flex justify-center mb-8">
          <Link
            href="/"
            className="bg-[#1c2b36] text-[#00ffcc] font-semibold px-6 py-2 rounded-full hover:bg-[#1f3a4a] transition"
          >
            ← Kembali ke Beranda
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["all", "suv", "mpv", "sedan"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                filter === type
                  ? "bg-[#00e0b8] text-black"
                  : "bg-[#00ffcc] text-black"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <Link
              key={car.id}
              href={`/detail?id=${car.id}`}
              className="bg-[#1a2b3c] rounded-xl overflow-hidden hover:-translate-y-1 transform transition"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-[#00ffcc] text-lg font-semibold mb-2">
                  {car.name}
                </h3>
                <p className="text-sm mb-2">{car.desc}</p>
                <span className="font-bold">{car.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
