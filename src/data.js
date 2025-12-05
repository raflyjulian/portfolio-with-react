import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/html.png";
import Tools3 from "/assets/tools/css.png";
import Tools4 from "/assets/tools/php.png";
import Tools5 from "/assets/tools/laravel.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/nextjs.png";
import Tools9 from "/assets/tools/reactjs.png";
import Tools10 from "/assets/tools/golang.png";
import Tools11 from "/assets/tools/.net.png";
import Tools12 from "/assets/tools/tailwind.png";
import Tools13 from "/assets/tools/bootstrap.png";
import Tools14 from "/assets/tools/postgre.png";
import Tools15 from "/assets/tools/mysql.png";
import Tools16 from "/assets/tools/github.png";
import Tools17 from "/assets/tools/postman.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "HTML",
    ket: "Markup Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "CSS",
    ket: "Style Sheet",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "PHP",
    ket: "Programming Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Laravel",
    ket: "PHP Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Programming Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "JavaScript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Next Js",
    ket: "React Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "React JS",
    ket: "Frontend Library",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Golang",
    ket: "Programming Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: ".NET",
    ket: "Development Framework",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Tailwind",
    ket: "CSS Framework",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "PostgreSQL",
    ket: "Database",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "MYSQL",
    ket: "Database",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Github",
    ket: "Version Control",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Postman",
    ket: "API Testing",
    dad: "1700",
  },
];


import Proyek1 from "/assets/proyek/portfolio-htmlcss.jpeg";
import Proyek2 from "/assets/proyek/web-sekolah.png";
import Proyek3 from "/assets/proyek/web-apotek.png";
import Proyek4 from "/assets/proyek/web-inventaris2.jpeg";
import Proyek5 from "/assets/proyek/web-kasir.jpg";
import Proyek6 from "/assets/proyek/web-inventaris.jpg";
import Proyek7 from "/assets/proyek/web-omnifood.jpeg";
import Proyek8 from "/assets/proyek/todo-app.jpeg";
import Proyek9 from "/assets/proyek/landing-page.jpeg";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "PortFolio html css",
    desk: "Portfolio ini adalah tugas sekolah yang dibuat dengan HTML, CSS, dan sedikit JavaScript untuk menampilkan data diri dan karya secara sederhana namun tetap menarik.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Web Sekolah",
    desk: "Website sekolah ini dibuat menggunakan HTML dan CSS untuk menampilkan informasi secara sederhana, rapi, dan mudah diakses.",
    tools: ["HTML", "CSS"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Apotek",
    desk: "Website apotek ini dibuat menggunakan Laravel untuk mengelola data obat, transaksi, dan informasi apotek dengan lebih terstruktur dan efisien.",
    tools: ["Laravel"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Web Peminjaman Barang RPL",
    desk: "Web peminjaman barang untuk RPL ini dibuat menggunakan Laravel Lumen sebagai backend dan React JS sebagai frontend untuk pengelolaan data yang cepat, ringan, dan interaktif.",
    tools: ["Laravel lumen", "ReactJS"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Kasir",
    desk: "Website kasir ini dibuat menggunakan Laravel untuk memudahkan pengelolaan transaksi dan data penjualan secara cepat dan terstruktur.",
    tools: ["Laravel"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Web Peminjaman Barang Sekolah",
    desk: "Website peminjaman barang sekolah ini dibuat menggunakan Laravel untuk mengelola data peminjaman dan pengembalian secara lebih mudah dan teratur.",
    tools: ["Laravel"],
    dad: "700",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Web Omnifood",
    desk: "Website Omnifood ini dibuat menggunakan HTML dan CSS untuk menampilkan informasi makanan secara sederhana, rapi, dan responsif.",
    tools: ["HTML", "CSS"],
    dad: "800",
  },
  {
    id: 8,
    gambar: Proyek8,
    nama: "Todo App",
    desk: "Todo App ini dibuat menggunakan React, Vite, dan CSS untuk mengelola daftar tugas secara cepat, ringan, dan responsif.",
    tools: ["React", "Vite", "CSS"],
    dad: "900",
  },
  {
    id: 9,
    gambar: Proyek9,
    nama: "Landing Page",
    desk: "Landing page ini dibuat menggunakan React, Vite, dan Tailwind CSS untuk tampilan yang modern, cepat, dan responsif.",
    tools: ["React", "Vite", "Tailwind"],
    dad: "1000",
  },
];




import Sertifikat1 from "/assets/sertifikat/sertifikat-vuejs.jpg";
import Sertifikat2 from "/assets/sertifikat/sertifikat-js.png";
import Sertifikat3 from "/assets/sertifikat/sertifikat-awscloud.png";
import Sertifikat4 from "/assets/sertifikat/sertifikat-game.jpg";
import Sertifikat5 from "/assets/sertifikat/sertifikat-dasar.png";
import Sertifikat6 from "/assets/sertifikat/sertifikat-k3.png";
import Sertifikat7 from "/assets/sertifikat/sertifikat-pkl.jpg";
import Sertifikat8 from "/assets/sertifikat/sertifikat-be-golang.jpg";

export const listSertifikat = [
  {
    id: 1,
    gambar: Sertifikat1,
    nama: "Vue.Js",
    dad: "100",
  },
  {
    id: 2,
    gambar: Sertifikat2,
    nama: "JavaScript",
    dad: "200",
  },
  {
    id: 3,
    gambar: Sertifikat3,
    nama: "AWS Cloud",
    dad: "300",
  },
  {
    id: 4,
    gambar: Sertifikat4,
    nama: "Game",
    dad: "400",
  },
  {
    id: 5,
    gambar: Sertifikat5,
    nama: "Pemrograman Dasar",
    dad: "500",
  },
  {
    id: 6,
    gambar: Sertifikat6,
    nama: "K3",
    dad: "600",
  },
  {
    id: 7,
    gambar: Sertifikat7,
    nama: "Magang/PKL",
    dad: "700",
  },
  {
    id: 8,
    gambar: Sertifikat8,
    nama: "Backend with Golang",
    dad: "800",
  },
];