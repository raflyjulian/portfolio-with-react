import { useState, useEffect } from "react";
import { listSertifikat } from "../data";

export default function Sertifikat() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // mobile → tampil 3 dulu
  const visibleSertifikat =
    isMobile && !showAll ? listSertifikat.slice(0, 3) : listSertifikat;

  return (
    <div className="sertifikat mt-32 py-10" id="sertifikat">
      <h1
        className="text-center text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Sertifikat
      </h1>

      <p
        className="text-base/loose text-center opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        Berikut ini beberapa sertifikat yang telah saya dapatkan
      </p>

      <div className="sertifikat-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {visibleSertifikat.map((sertifikat) => (
          <div
            key={sertifikat.id}
            className="p-4 bg-zinc-800 rounded-md"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={sertifikat.dad}
          >
            <img src={sertifikat.gambar} alt="sertifikat" loading="lazy" />

            <div className="flex justify-center">
              <h1 className="text-2xl font-bold my-4 inline-block py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md">
                {sertifikat.nama}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* tombol hanya mobile */}
      {isMobile && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="py-2 px-6 bg-violet-700 rounded-md hover:bg-violet-600 font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={visibleSertifikat.length * 100}
          >
            {showAll ? "Sembunyikan" : "Lihat Selengkapnya"}
          </button>
        </div>
      )}
    </div>
  );
}
