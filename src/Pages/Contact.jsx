import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Contact(){
    return(
        <>
    <Navbar/>
    {/* Hero Section Contact us */}
    <section className="w-full pt-36">
      <div className="w-full flex flex-col justify-center items-center pb-10">
        <img src="/img/contact-hero.png" alt="" />
        <div className="w-full flex items-center justify-center">
          <p className="w-1/2 text-center text-xl text-customBlue mt-3"> <span className="font-bold italic">TEKNOLOGI SOLUSI NUSANTARA SINERGI</span>, kami menghargai umpan balik Anda dan selalu siap membantu jika ada pertanyaan atau masalah. Silakan hubungi kami.</p>
        </div>
      </div>
    </section>
    {/*Akhir Hero Section Contact us */}

     {/* social media */}
     <section className="w-full py-16 px-36">
        <div className="grid grid-cols-3 gap-12 w-full">

          <div className="flex flex-col items-center justify-center">
            <IoMdMail className="w-20 h-20 mb-3 text-customBlue"/>
            <p className="text-2xl font-bold text-customBlue">info@tsns.my.id</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <FaPhoneAlt className="w-20 h-20 mb-3 text-customBlue"/>
            <p className="text-2xl font-bold text-customBlue">+62-896-0423-5311</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <FaLocationDot className="w-20 h-20 mb-3 text-customBlue"/>
            <p className="text-sm text-center font-bold text-customBlue">Perum mayang pratama blok G3 No. 24 kel. Mustikasari kec. Mustikasari Bekasi Timur</p>
          </div>

        </div>
      </section>
    {/* akhir social media */}

    {/* awal peta */}
    <section className="py-20 w-full">
      <div className="w-full flex justify-center">
        <h2 className="uppercase font-black text-customBlue text-5xl mb-8">Kunjungi Kami</h2>
      </div>

    <div className="w-full flex justify-center">
      <div className="w-3/5 h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3965.808532083205!2d107.00930882324931!3d-6.288879393700099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPerum%20mayang%20pratama%20blok%20G3%20No.%2024%20kel.%20Mustikasari%20kec.%20Mustikasari%20Bekasi%20Timu!5e0!3m2!1sid!2sid!4v1730619072377!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
    </section>
    {/* akhir peta */}

    <section className="w-full pt-20 pb-32 flex justify-center">
      <h2 className="text-customBlue px-8 py-2 font-black text-4xl uppercase w-3/4 text-center">Terima kasih telah memilih TEKNOLOGI SOLUSI NUSANTARA SINERGI. Kami tunggu kabar dari Anda!</h2>
    </section>
    <Footer/>
        </>
    )
}