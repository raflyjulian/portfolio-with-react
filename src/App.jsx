import Tentang from "./components/Tentang";
import Tools from "./components/Tools";
import Proyek from "./components/Proyek";
import Sertifikat from "./components/Sertifikat";
import Hero from "./components/Hero";
import Kontak from "./components/Kontak";

export default function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Hero />
      <Tentang />
      <Tools />
      <Proyek />
      <Sertifikat />
      <Kontak />
    </div>
  );
}
