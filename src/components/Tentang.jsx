import DataImage from "../data";

export default function Tentang() {
  return (
    <div className="tentang mt-32 py-10" id="tentang">
      <div
        className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg animate__animated animate__fadeInUp animate__delay-3s"
      >
        <img
          src={DataImage.HeroImage}
          alt="image"
          className="w-12 rounded-md mb-10 sm:hidden"
          loading="lazy"
        />

        {/* TEXT TENTANG */}
        <p className="text-base leading-relaxed md:leading-loose mt-10">
          Saya adalah seorang Software Developer yang berfokus pada pengembangan
          aplikasi dan web. Berpengalaman membangun solusi end-to-end mulai dari
          backend, frontend, hingga integrasi API. Terbiasa menggunakan Laravel,
          React, Golang, dan .NET dalam mengembangkan fitur yang scalable dan 
          maintainable sesuai kebutuhan bisnis.

          Saya memiliki pengalaman dalam merancang arsitektur aplikasi,
          mengelola database PostgreSQL dan MySQL, serta membangun antarmuka
          yang responsif dan user-friendly. Dalam workflow pengembangan, saya
          terbiasa menggunakan Git, Postman, dan Docker dengan pendekatan agile.

          Saya bersemangat untuk terus belajar dan mendalami arsitektur aplikasi,
          optimasi performa, serta best practice modern dalam software development.
        </p>

        <div className="flex items-center justify-between mt-10">
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="w-12 rounded-md sm:block hidden"
            loading="lazy"
          />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                9<span className="text-violet-500">+</span>
              </h1>
              <p>Projek Selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                3<span className="text-violet-500">+</span>
              </h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
