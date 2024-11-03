import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function About(){
    return(
        <>
              <Navbar/>
      {/* Pengantar Diterktur */}
      <section className="pt-36 w-full flex flex-col justify-center items-center ">
        <div className="mb-4 border-b-8 border-r-4  border-customBlue  rounded-3xl shadow-inner overflow-hidden">
          <img src="/img/direktur.png" alt="" className="h-72 px-8" />
          <div className="w-full bg-customBlue py-2">
            <p className="text-center text-white">M. Lutfi Apriamto</p>
          </div>
        </div>

        <div className="w-3/4 flex flex-col justify-center items-center">
          <h2 className="mb-6 font-bold uppercase text-4xl text-customBlue">Pengantar Direktur</h2>
          <p className="text-center w-3/4 mb-3">Kami dari <span className="font-bold text-customBlue">PT. Teknologi Solusi Nusantara Sinergi</span> dengan senang hati menyambut Anda dalam perjalanan kami menuju inovasi dan keunggulan. Sejak didirikan, perusahaan kami telah berkomitmen untuk menyediakan solusi teknologi terbaik yang tidak hanya memenuhi, tetapi juga melebihi ekspektasi klien kami.</p>
          <p className="text-center w-3/4 mb-3">
          Komitmen kami terhadap integritas, kualitas, dan pelayanan unggul menjadi landasan dari setiap langkah yang kami ambil. Kami yakin bahwa kolaborasi erat dengan klien, serta fokus kami pada pengembangan teknologi yang berkelanjutan, adalah kunci keberhasilan bersama.
          </p>
          <p className="text-center w-3/4 mb-3">
          Dengan penuh kebanggaan, kami terus melangkah maju untuk menjadi pilihan utama dalam menyediakan solusi teknologi yang sesuai dengan kebutuhan bisnis Anda.
          </p>
          <p className="text-center w-3/4">
          Salam hangat,
          </p>
          <p className="text-center w-3/4 mb-3 text-customBlue font-bold">
          Muhammad Lutfi Apriamto
          </p>
        </div>
      </section>
      {/* akhir pengantar direktur */}

      {/* Biographi Section */}
      <section className="py-20 w-full">
        <div className="w-full py-14 flex justify-center items-center">

          <div className="w-1/2 px-20 ">
            <div className="w-full flex items-center justify-center mb-5">
              <h2 className="font-black text-center text-3xl w-4/5 text-customBlue">TENTANG KAMI</h2>
            </div>
            <p className="mb-2 text-center">
            <span className="font-bold text-customBlue text-center">PT. Teknologi Solusi Nusantara Sinergi</span>adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif untuk memenuhi kebutuhan bisnis modern. 
            </p>
            <p className="mb-2 text-center">
            Kami menawarkan layanan pembuatan web dalam berbagai bentuk, mulai dari Transactional Processing System (TPS) seperti e-commerce, marketplace, dan booking online, hingga Management Information System (MIS) yang meliputi sistem pelaporan keuangan, dashboard penjualan, inventaris, serta performa karyawan. Kami juga menyediakan pembuatan landing page profesional untuk menampilkan company profile yang menarik. 
            </p>
            <p className="mb-6 text-center">
            Dengan didukung oleh tim muda dan kreatif, kami berkomitmen untuk terus berinovasi dan memberikan solusi yang efektif dan berkualitas bagi setiap klien.
            </p>
            <div className="w-full flex justify-center">
              <button className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Hubungi Kami</button>
            </div>
          </div>

        <div className="w-1/2 flex justify-center">
          <img src="/img/poto-bersama.jpg" alt="" className="w-3/4 rounded-md border-b-8 border-b-customBlue border-r-4 border-r-customBlue shadow-xl" />
        </div>
      </div>
      </section>
      {/* Akhir Biographi Section */}

      <h2 className="font-black text-customBlue text-6xl text-center">VISI MISI KAMI</h2>

      {/* Visi Misi */}
      <section className="w-full py-16 flex justify-center items-center">
        <div className="w-3/4 flex justify-center gap-x-12 ">
          <div className="w-1/2 px-10 py-5  rounded-md border-b-8 border-b-customBlue border-r-4 border-r-customBlue shadow-xl ">
            <h2 className="text-center text-customBlue uppercase text-4xl font-black mb-5">Visi</h2>
            <p className="text-center">Menjadi perusahaan teknologi terkemuka yang memberikan solusi digital inovatif dan andal, mendukung transformasi bisnis di berbagai sektor dengan fokus pada kualitas, efisiensi, dan kepuasan pelanggan.</p>
          </div>

          <div className="w-1/2 px-10 py-5  rounded-md border-b-8 border-b-customBlue border-r-4 border-r-customBlue shadow-xl">
            <h2 className="text-center text-customBlue uppercase text-4xl font-black mb-5">Misi</h2>
            <p className="text-center">Kami menyediakan layanan teknologi yang dirancang untuk mempermudah proses bisnis, termasuk pengembangan sistem pemrosesan transaksi yang efisien. Selain itu, kami menciptakan landing page modern dan profesional untuk memperkuat citra perusahaan klien, serta membangun platform e-commerce, marketplace, dan sistem pemesanan online yang user-friendly, aman, dan efektif. Dengan komitmen kuat terhadap inovasi, kami senantiasa menjaga kualitas layanan dan memberikan dukungan terbaik kepada setiap pelanggan.</p>
          </div>
        </div>
      </section>
      {/* Akhir Visi Misi */}

      <h2 className="font-black text-customBlue text-6xl text-center mb-10">TIM KAMI</h2>

      {/* Team kami section */}
      <section className="w-full py-16 grid grid-cols-4 gap-16 px-20">
        <div className=" bg-white rounded-md shadow-xl border-b-8 border-b-customBlue border-r-4  border-r-customBlue">
          <div className="flex justify-center w-5/6 bg-customBlue -translate-x-2 -translate-y-10 rounded-lg ">
            <img src="/img/fathih.png" alt="" className="h-52 object-cover object-top " />
          </div>

          <div className="px-8">
            <h1 className="uppercase font-bold text-lg text-customBlue">Fathih Pradipta Arya PH</h1>
            <p className="font-thin italic mb-5">Lead Software Designer</p>
          </div>
        </div>

        <div className=" bg-white rounded-md shadow-xl border-b-8 border-b-customBlue border-r-4  border-r-customBlue">
          <div className="flex justify-center w-5/6 bg-customBlue -translate-x-2 -translate-y-10 rounded-lg ">
            <img src="/img/hegi.png" alt="" className="h-52 object-cover object-top " />
          </div>

          <div className="px-8">
            <h1 className="uppercase font-bold text-lg text-customBlue">Fisi Sela Hayagi R</h1>
            <p className="font-thin italic mb-5">Project Manager</p>
          </div>
        </div>

        <div className=" bg-white rounded-md shadow-xl border-b-8 border-b-customBlue border-r-4  border-r-customBlue">
          <div className="flex justify-center w-5/6 bg-customBlue -translate-x-2 -translate-y-10 rounded-lg ">
            <img src="/img/raple.png" alt="" className="h-52 object-cover object-top " />
          </div>

          <div className="px-8">
            <h1 className="uppercase font-bold text-lg text-customBlue">Muhammad Rafli</h1>
            <p className="font-thin italic mb-5">Lead Software Analist</p>
          </div>
        </div>

        <div className=" bg-white rounded-md shadow-xl border-b-8 border-b-customBlue border-r-4  border-r-customBlue">
          <div className="flex justify-center w-5/6 bg-customBlue -translate-x-2 -translate-y-10 rounded-lg ">
            <img src="/img/rois.png" alt="" className="h-52 object-cover object-top " />
          </div>

          <div className="px-8">
            <h1 className="uppercase font-bold text-lg text-customBlue">Rois Manto</h1>
            <p className="font-thin italic mb-5">Lead Tech Writer & Lead Tester</p>
          </div>
        </div>

      </section>
      {/* Akhir Team kami section */}

      {/* Kerjasama Section */}
        <section className="pb-10 w-full">
          <div className="w-full flex justify-center">
            <img src="/img/kerja-sama.png" alt="" className="w-1/4" />
          </div>

          <div className="w-full flex justify-center">
            <p className="text-xl font-bold capitalize text-customBlue">Ingin bekerja sama ? Segera Hubungi kami</p>
          </div>

          <div className="w-full flex justify-center my-10">
              <button className="bg-customBlue text-white text-xl font-semibold rounded-xl py-2 px-6">Klik Disini !</button>
            </div>
        </section>
      {/* Akhir Kerjasama Section */}
      <Footer/>
        </>
    )
}