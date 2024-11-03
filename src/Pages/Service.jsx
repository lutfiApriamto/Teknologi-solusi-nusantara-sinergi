import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Service(){
    return(
        <>
            <Navbar/>
    {/* Layanan */}
    <section className="pt-36 w-full">
      <div className="w-full flex justify-center">
        <h1 className="font-bold uppercase text-customBlue text-6xl">Layanan Kami</h1>
      </div>

      <div className="w-full flex px-36 py-16 justify-bet items-center">
        <div className="w-1/2 px-8">
          <h2 className="text-3xl uppercase font-bold text-center mb-4 text-customBlue">Transactional Processing System (TPS)</h2>
          <p>Solusi untuk mengelola dan memproses transaksi bisnis secara efisien dan real-time, mendukung aktivitas seperti pembelian, pembayaran, dan pemesanan online.</p>
          <p className="font-bold mt-4 mb-7">Contoh: <span className="italic">Sistem pembayaran di toko online atau aplikasi booking hotel secara online</span>.</p>
          <div className="w-full flex justify-center">
            <button className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Coba Sekarang !</button>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img src="/img/service1.jpg" alt="" className="w-3/4 rounded-md shadow-xl" />
        </div>
      </div>

      <div className="w-full flex flex-row-reverse px-36 py-16 justify-bet items-center">
        <div className="w-1/2 px-8">
          <h2 className="text-3xl uppercase font-bold text-center mb-4 text-customBlue">Management Information System (MIS)</h2>
          <p className="text-right">Sistem yang menyediakan laporan dan analisis data untuk membantu manajemen dalam pengambilan keputusan yang tepat, mencakup pelaporan keuangan, penjualan, inventaris, dan performa karyawan.</p>
          <p className="font-bold mt-4 mb-7 text-right">Contoh: <span className="italic">Dashboard pelaporan penjualan harian di perusahaan retail atau sistem monitoring performa karyawan.</span></p>
          <div className="w-full flex justify-center">
            <button className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Coba Sekarang !</button>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img src="/img/service2.jpg" alt="" className="w-3/4 rounded-md shadow-xl" />
        </div>
      </div>

      <div className="w-full flex px-36 py-16 justify-bet items-center">
        <div className="w-1/2 px-8">
          <h2 className="text-3xl uppercase font-bold text-center mb-4 text-customBlue">Company Profile</h2>
          <p>Halaman web profesional yang menampilkan profil perusahaan secara singkat, mencakup informasi penting seperti visi, misi, layanan, dan kontak untuk memperkuat kehadiran online bisnis Anda.</p>
          <p className="font-bold mt-4 mb-7">Contoh: <span className="italic"> Halaman landing profile untuk perusahaan teknologi atau agensi kreatif yang memperkenalkan layanan dan portofolio mereka.</span></p>
          <div className="w-full flex justify-center">
            <button className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Coba Sekarang !</button>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img src="/img/service3.jpg" alt="" className="w-3/4 rounded-md shadow-xl" />
        </div>
      </div>
    </section>
    {/* akhir layanan */}

    {/* prosses */}
    <section className="py-16 w-full px-36">
      <div className="w-full flex flex-col items-center justify-center mb-16">
        <h2 className="font-bold text-4xl uppercase text-customBlue mb-4">Proses Pembuatan Aplikasi</h2>
        <p className="w-1/2 text-center">Proses Pengembangan Aplikasi terdiri dari beberapa tahap</p>
      </div>

      <div className="grid grid-cols-3 gap-12 w-full">
        <div className="flex flex-col justify-center items-center">
          <img src="/img/process1.png" alt="" className="w-1/4 mb-4" />
          <h2 className="font-bold uppercase text-xl text-customBlue text-center">Memahami/Mengembangkan Strategi</h2>
        </div>
        
        <div className="flex flex-col justify-center items-center">
          <img src="/img/process1.png" alt="" className="w-1/4 mb-4" />
          <h2 className="font-bold uppercase text-xl text-customBlue text-center"> Desain & Pengembangan Perangkat Lunak</h2>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src="/img/process1.png" alt="" className="w-1/4 mb-4" />
          <h2 className="font-bold uppercase text-xl text-customBlue text-center"> Pengujian & Dukungan Otomatis</h2>
        </div>
      </div>

      <div className="w-full flex justify-center my-16">
            <a href="" className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Pelajari Lebih Lanjut</a>
          </div>

    </section>
    {/*akhir prosses */}
    <Footer/>
        </>
    )
}