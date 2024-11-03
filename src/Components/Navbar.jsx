import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cek apakah pengguna sudah melakukan scroll
      setIsScrolled(window.scrollY > 0);
    };

    // Tambahkan event listener
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-20 py-7 flex justify-between items-center fixed top-0 right-0 left-0 bg-white z-10 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg " : "shadow-none"
      }`}
    >
      {/* Logo & Brand */}
      <div className="flex gap-5 justify-center items-center">
        <img src="/img/logo.png" alt="Logo" className="h-10 w-10" />
        <div className="font-bold text-2xl text-customBlue">
          TEKNOLOGI SOLUSI NUSANTARA SINERGI
        </div>
      </div>
      {/* End Logo & Brand */}

      {/* List Item */}
      <div className="flex gap-x-7 justify-center items-center">
        <Link to="/" className="font-bold text-customBlue hover:text-blue-400">
          HOME
        </Link>
        <Link to="/about" className="font-bold text-customBlue hover:text-blue-400">
          ABOUT US
        </Link>
        <Link to="/service" className="font-bold text-customBlue hover:text-blue-400">
          SERVICE
        </Link>
        <Link to="/portfolio" className="font-bold text-customBlue hover:text-blue-400">
          PORTFOLIO
        </Link>
        <Link
          to="/contact"
          className="font-bold text-white bg-customBlue px-5 py-2 rounded shadow-lg hover:-translate-y-1 hover:bg-customBlue transition-all duration-300"
        >
          CONTACT US
        </Link>
      </div>
      {/* End List Item */}
    </nav>
  );
}
