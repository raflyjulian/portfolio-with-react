const Footer = () => {
  return (
    <footer className="mt-32 py-10 border-t border-zinc-700 w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Logo / Judul */}
        <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-violet-400 to-pink-400 text-transparent bg-clip-text">
          Portfolio
        </h1>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a href="#beranda" className="hover:text-violet-400 transition">Beranda</a>
          <a href="#tentang" className="hover:text-violet-400 transition">Tentang</a>
          <a href="#proyek" className="hover:text-violet-400 transition">Proyek</a>
          <a href="#sertifikat" className="hover:text-violet-400 transition">Sertifikat</a>
        </div>

        {/* Sosial Media */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/raflyjulian"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
          >
            <i className="ri-github-fill ri-2x"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/muhamad-rafly-julian/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
          >
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>

          <a
            href="mailto:mraflyjulian@gmail.com"
            className="hover:text-violet-400 transition"
          >
            <i className="ri-mail-fill ri-2x"></i>
          </a>

          <a
            href="https://www.instagram.com/mraflyjulian_/?hl=en_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
          >
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm opacity-50 mt-8">
        © {new Date().getFullYear()} Muhamad Rafly Julian — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
