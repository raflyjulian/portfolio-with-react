import { useState, useEffect } from "react";
import { listProyek } from "../data";

export default function Proyek() {
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

  // Jika mobile → tampil 3 dulu
  const visibleProyek =
    isMobile && !showAll ? listProyek.slice(0, 3) : listProyek;

  return (
    <div className="proyek mt-32 py-10" id="proyek">
      <h1
        className="text-center text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Projek
      </h1>

      <p
        className="text-base/loose text-center opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        Berikut ini beberapa projek yang telah saya buat
      </p>

      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {visibleProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="p-4 bg-zinc-800 rounded-md"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={proyek.dad}
          >
            <img src={proyek.gambar} alt="Proyek image" loading="lazy" />
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>

              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    key={index}
                    className="py-1 px-3 border border-violet-500 bg-violet-600 rounded-md font-semibold"
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* tombol hanya muncul di mobile */}
      {isMobile && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="py-2 px-6 bg-violet-700 rounded-md hover:bg-violet-600 font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={visibleProyek.length * 100}
          >
            {showAll ? "Sembunyikan" : "Lihat Selengkapnya"}
          </button>
        </div>
      )}
    </div>
  );
}
