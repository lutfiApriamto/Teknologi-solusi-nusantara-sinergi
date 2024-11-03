import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function HomePage(){
    return(
        <>
            <Navbar/>
    {/* hero section */}
    <section className="w-full pt-36">
      <div className="w-full flex justify-center">
        <h1 className="text-center text-customBlue font-extrabold text-6xl italic w-1/2">MEWUJUDKAN IDE MENJADI SOLUSI DIGITAL</h1>
      </div>

      <div className="flex justify-center w-full">
        <p className="w-2/3 text-center mt-6 text-lg"> mencerminkan komitmen <span className="italic font-bold">Teknologi Solusi Nusantara Sinergi</span> untuk mengubah gagasan klien menjadi aplikasi berbasis website yang inovatif dan efektif. Kami percaya bahwa setiap ide dapat menjadi solusi digital yang bernilai dan berdampak bagi pertumbuhan bisnis.</p>
      </div>

      <div className="w-full flex justify-center mt-5">
        <button className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Get Started</button>
      </div>

      <div className="w-full flex items-center justify-center mt-7 rounded">
        <img src="/img/hero.jpg" alt="" className="w-1/3 rounded-lg shadow-2xl" />
      </div>
    </section>
    {/* end Hero section */}

    {/* information section */}
    <section className="py-16 w-full ">
      {/* informasi 1 */}
      <div className="w-full py-14 flex justify-center items-center">

        <div className="w-1/2 px-20 ">
          <div className="w-full flex items-center justify-center mb-5">
            <h2 className="font-black text-center text-3xl w-4/5 text-customBlue"> SOLUSI PERANGKAT LUNAK YANG TERUKUR, AMAN, & HANDAL</h2>
          </div>
          <p className="mb-6"> Kami percaya bahwa kami dapat memberikan solusi yang tumbuh bersama bisnis Anda. Perangkat lunak kami dirancang untuk dapat diskalakan, aman, dan andal, sehingga Anda dapat memenuhi permintaan bisnis Anda yang terus berubah dengan mudah.</p>
          <div className="w-full flex justify-center">
            <button className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Get Started</button>
          </div>
        </div>

        <div>
          <img src="/img/informasi1.png" alt="" />
        </div>
      </div>
      {/* akhir informasi 1 */}

      {/* informasi 2 */}
      <div className="w-full py-14 flex flex-row-reverse justify-center items-center">

        <div className="w-1/2 px-20 ">
          <div className="w-full flex items-center justify-center mb-5">
            <h2 className="font-black text-center text-3xl w-4/5 text-customBlue uppercase"> Transformasikan Bisnis Anda dengan Keahlian kami</h2>
          </div>
          <p className="mb-6 text-right"> Kami hadir untuk membantu Anda membuka potensi penuh bisnis Anda. Dengan solusi inovatif kami, tenaga profesional yang terampil, dan komitmen terhadap layanan pelanggan, <span className="italic font-bold">Teknologi solusi Nusantara Sinergi</span> adalah mitra yang Anda butuhkan untuk mendorong kesuksesan bisnis Anda.</p>
          <div className="w-full flex justify-center">
            <button className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Get Started</button>
          </div>
        </div>

        <div>
          <img src="/img/informasi2.png" alt="" />
        </div>
    </div>
      {/* akhir informasi 2 */}

      {/* informasi 3 */}
      <div className="w-full py-14 flex justify-center items-center">

        <div className="w-1/2 px-20 ">
          <div className="w-full flex items-center justify-center mb-5">
            <h2 className="font-black text-center text-3xl w-4/5 text-customBlue uppercase">Tim Profesional Terampil yang Siap Melayani Anda</h2>
          </div>
          <p className="mb-6"> Tim kami berdedikasi untuk membantu klien kami mencapai tujuan mereka. Apakah Anda membutuhkan solusi perangkat lunak khusus, bantuan desain, atau membutuhkan web atau aplikasi yang menarik, kami siap membantu.</p>
          <div className="w-full flex justify-center">
            <button className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Get Started</button>
          </div>
        </div>

        <div>
          <img src="/img/informasi3.png" alt="" />
        </div>
      </div>
      {/* akhir informasi 3 */}

    </section>
    {/* akhir information section */}

    {/* Deskirpsi */}
    <section className="w-full py-16 px-36">
    <div className="grid grid-cols-3 gap-12 w-full">

      <div className="flex flex-col  items-center justify-center py-7 shadow-xl rounded-lg border-4 border-customBlue px-5 ">
        <img src="/img/deskripsi1.png" alt="" className="h-30 w-30 mb-3" />
        <h2 className="font-bold text-xl text-customBlue uppercase mb-3">Pengembangan Aplikasi</h2>
        <p className="text-center">Layanan pengembangan aplikasi berbasis website yang komprehensif untuk merampingkan akses informasi dan meningkatkan produktivitas melalui solusi yang inovatif dan tersinkronisasi</p>
      </div>

      <div className="flex flex-col  items-center  py-7 shadow-xl rounded-lg border-4 border-customBlue px-5 ">
        <img src="/img/deskripsi2.png" alt="" className="h-30 w-30 mb-3" />
        <h2 className="font-bold text-xl text-customBlue uppercase mb-3">Perancangan Solusi</h2>
        <p className="text-center">Memberikan solusi yang disesuaikan dan inovatif kepada klien untuk memenuhi kebutuhan dan tantangan bisnis mereka yang spesifik</p>
      </div>

      <div className="flex flex-col  items-center  py-7 shadow-xl rounded-lg border-4 border-customBlue px-5 ">
        <img src="/img/deskripsi3.png" alt="" className="h-30 w-30 mb-3" />
        <h2 className="font-bold text-xl text-customBlue uppercase mb-3">Pengembangan Web</h2>
        <p className="text-center">Solusi khusus, efisien, dan ramah pengguna bagi bisnis untuk meningkatkan eksistensi online mereka dan mencapai tujuan mereka dengan mulus</p>
      </div>

      <div className="flex flex-col  items-center  py-7 shadow-xl rounded-lg border-4 border-customBlue px-5 ">
        <img src="/img/deskripsi4.png" alt="" className="h-30 w-30 mb-3" />
        <h2 className="font-bold text-xl text-customBlue uppercase mb-3">UI/UX</h2>
        <p className="text-center">Berfokus pada penciptaan pengalaman digital yang berpusat pada pengguna untuk meningkatkan kegunaan dan keterlibatan secara keseluruhan dengan produk klien</p>
      </div>

      <div className="flex flex-col  items-center  py-7 shadow-xl rounded-lg border-4 border-customBlue px-5 ">
        <img src="/img/deskripsi5.png" alt="" className="h-30 w-30 mb-3" />
        <h2 className="font-bold text-xl text-customBlue uppercase mb-3">Desain Responsif</h2>
        <p className="text-center">Desain responsif yang mulus untuk membantu bisnis menjangkau audiens mereka secara efektif di berbagai tampilan perangkat</p>
      </div>

      <div className="flex flex-col  items-center  py-7 shadow-xl rounded-lg border-4 border-customBlue px-5 ">
        <img src="/img/deskripsi6.png" alt="" className="h-30 w-30 mb-3" />
        <h2 className="font-bold text-xl text-customBlue uppercase mb-3">Penyimpanan Online</h2>
        <p className="text-center">Memberikan solusi penyimpanan online yang terukur, aman, dan hemat biaya untuk membantu klien mengoptimalkan infrastruktur dan operasi TI mereka</p>
      </div>
    </div>

    <div className="w-full flex justify-center mt-10">
        <button className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Learn More</button>
    </div>

    </section>
    {/* Akhir Deskirpsi  */}

    {/* Footer */}
    <Footer/>
    {/* Akhir Footer */}
        </>
    )
}