import DataImage from "../data";

const Hero = () => {
  return (
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-1s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img
            src={DataImage.HeroImage}
            alt="hero image"
            className="w-10 rounded-md"
            loading="lazy"
          />
          <q>Bukan ngoding kalo ngga error.😁</q>
        </div>

        <h1 className="text-5xl/tight font-bold mb-4 whitespace-normal md:whitespace-nowrap">
          Hi, Saya Muhamad Rafly Julian
        </h1>

        <p className="text-base/loose mb-6 opacity-50">
          Saya berminat pada bidang software development dan fokus membangun
            aplikasi serta website yang fungsional, efisien, dan mudah
            digunakan. Saya bekerja dengan Laravel, React, Golang, dan .NET
            untuk membuat solusi yang sesuai kebutuhan bisnis. Bagi saya,
            kualitas, ketelitian, dan pembelajaran berkelanjutan adalah hal
            utama dalam setiap proyek yang saya kerjakan.
        </p>

        <div className="flex items-center sm:gap-4 gap-2">
          <a
            href="/assets/CV-RaflyJulian.pdf"
            download="CV-Muhamad-Rafly-Julian.pdf"
            target="_blank"
            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
          >
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a
            href="#proyek"
            className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
          >
            Lihat Projek <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>

      <img
        src={DataImage.HeroImage}
        alt="hero"
        className="w-[500px] md:ml-auto rounded-2xl animate__animated animate__fadeInUp animate__delay-2s"
        loading="lazy"
      />
    </div>
  );
};

export default Hero;
