"use client"
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const carData = [
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    type: "suv",
    image: "https://source.unsplash.com/600x400/?toyota,fortuner",
    desc: "SUV tangguh dengan kenyamanan dan fitur canggih.",
    price: "Rp 520.000.000",
  },
  {
    id: "brv",
    name: "Honda BR-V",
    type: "mpv",
    image: "https://source.unsplash.com/600x400/?honda,brv",
    desc: "MPV keluarga stylish dan hemat bahan bakar.",
    price: "Rp 310.000.000",
  },
  {
    id: "camry",
    name: "Toyota Camry",
    type: "sedan",
    image: "https://source.unsplash.com/600x400/?toyota,camry",
    desc: "Sedan premium dengan kenyamanan dan teknologi modern.",
    price: "Rp 670.000.000",
  },
  {
    id: "xenia",
    name: "Daihatsu Xenia",
    type: "mpv",
    image: "https://source.unsplash.com/600x400/?daihatsu,xenia",
    desc: "Pilihan tepat untuk mobil keluarga sehari-hari.",
    price: "Rp 250.000.000",
  },
  {
    id: "cx5",
    name: "Mazda CX-5",
    type: "suv",
    image: "https://source.unsplash.com/600x400/?mazda,cx5",
    desc: "SUV premium dengan desain elegan dan performa andal.",
    price: "Rp 630.000.000",
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
