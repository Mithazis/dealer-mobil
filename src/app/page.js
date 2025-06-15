'use client'; // jika pakai App Router
import { useEffect } from 'react';

const bestSellers = [
  {
    name: "BMW M4 Coupe 2022",
    image: "/images/BMW-M4-coupe-2022/BMWM42022.jpg", // pastikan kamu pindahkan gambar ke public/images
    desc: "Elegan di jalan, buas di lintasan. 503 HP, desain agresif, interior full leather.",
    url: "/detail-bmw-m4"
  },
  {
    name: "Mercedes-Benz E300 Sport Style 2019",
    image: "/images/Mercy-E300/mercy1.jpeg",
    desc: "Elegan, sporty, dan penuh prestise. Mesin 2.0L Turbo, panoramic roof.",
    url: "/detail-mercy-e300"
  },
  {
    name: "Jeep Wrangler Sahara 2013",
    image: "/images/Sahara-2013/sahara.jpeg",
    desc: "Ikonik, tangguh, siap jelajah. Mesin 3.6L V6, 4x4 aktif.",
    url: "/detail-jeep-wrangler"
  }
];

export default function HomePage() {
  useEffect(() => {
    document.title = "Dealer Mobil Modern";
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-[#f4f4f4] font-[Poppins] min-h-screen">
      <header className="flex justify-between items-center px-[10%] py-5 sticky top-0 bg-[#0f2027e6] z-50">
        <div className="text-2xl font-extrabold text-[#00ffcc]">Dealer Non Geulis</div>
        <nav className="space-x-5">
          <a href="#" className="hover:text-[#00ffcc] transition">Beranda</a>
          <a href="#mobil" className="hover:text-[#00ffcc] transition">Koleksi Mobil</a>
          <a href="#kontak" className="hover:text-[#00ffcc] transition">Kontak</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-5 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00ffcc] mb-5">Jual Mobil Impian Anda</h1>
        <p className="max-w-xl text-lg mb-6">
          Kami menawarkan mobil baru dan bekas terbaik dengan harga bersaing, garansi, dan layanan terpercaya.
        </p>
        <button
          onClick={() => (window.location.href = '/koleksi')}
          className="px-6 py-3 rounded-full bg-[#00ffcc] text-black font-semibold hover:bg-[#00e0b8] transition"
        >
          Lihat Koleksi
        </button>
      </section>

      <section id="mobil" className="px-[10%] py-16">
        <h2 className="text-3xl text-center font-bold text-[#00ffcc] mb-10">Mobil Rekomendasi</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((car, index) => (
            <div
              key={index}
              className="bg-[#1a2b3c] rounded-xl overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer"
              onClick={() => (window.location.href = car.url)}
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <h3 className="text-[#00ffcc] text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-sm mb-2">{car.desc}</p>
                <span className="font-bold text-white">Open Price Nego</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="kontak" className="px-[10%] py-16 text-center">
        <h2 className="text-3xl font-bold text-[#00ffcc] mb-6">Hubungi Kami</h2>
        <p>Silakan hubungi kami via WhatsApp atau kunjungi showroom untuk info lebih lanjut.</p>
      </section>

      <footer className="bg-black text-center py-5 text-sm text-gray-400">
        &copy; 2025 Dealer MobilKu. Dibuat dengan cinta dan semangat otomotif.
      </footer>
    </div>
  );
}
