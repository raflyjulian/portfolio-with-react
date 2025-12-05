import { useState, useEffect } from "react";
import { listTools } from "../data";

export default function Tools() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi device saat pertama kali load
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640); // < 640px = mobile
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Aturan tampilan
  const visibleTools = isMobile && !showAll ? listTools.slice(0, 6) : listTools;

  return (
    <div className="tools mt-32" id="tools">
      <h1
        className="text-4xl/snug font-bold mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Tools yang dipakai
      </h1>

      <p
        className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website
        atau aplikasi.
      </p>

      {/* LIST TOOLS */}
      <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {visibleTools.map((tool) => (
          <div
            key={tool.id}
            className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={tool.dad}
          >
            <img
              src={tool.gambar}
              alt="tool"
              className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded-md"
            />

            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50 text-sm">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TOMBOL SELENGKAPNYA → hanya muncul di mobile */}
      {isMobile && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="py-2 px-6 bg-violet-700 rounded-md hover:bg-violet-600 font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={visibleTools.length * 100}
          >
            {showAll ? "Sembunyikan" : "Lihat Selengkapnya"}
          </button>
        </div>
      )}
    </div>
  );
}
