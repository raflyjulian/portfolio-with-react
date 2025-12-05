import { useState } from "react";

const Kontak = () => {
  const [result, setResult] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    setResult("Mengirim...");

    const formData = new FormData(e.target);
    formData.append("access_key", "8a58028f-5ece-456a-85d3-cfda233c86bd"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Pesan berhasil dikirim!");
      e.target.reset();
    } else {
      setResult("Gagal mengirim pesan, coba lagi!");
    }
  };

  return (
    <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
      <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>

      <p className="text-center opacity-50 mb-10">Mari terhubung dengan saya</p>

      <form
        onSubmit={sendMessage}
        className="bg-zinc-800 p-10 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto rounded-md"
        autoComplete="off"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              placeholder="Masukan Nama..."
              className="border border-zinc-500 p-2 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Masukan Email..."
              className="border border-zinc-500 p-2 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="pesan">
              Pesan
            </label>
            <textarea
              name="message"
              id="pesan"
              rows="7"
              placeholder="Pesan..."
              className="border border-zinc-500 p-2 rounded-md"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
            >
              Kirim Pesan
            </button>
          </div>

          {/* RESULT */}
          {result && (
            <p className="text-center opacity-70 mt-2">{result}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Kontak;
