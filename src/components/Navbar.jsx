import logo from "../assets/logo.png";
import { FiMail, FiPhone } from "react-icons/fi"; // optional icons

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* 🔵 Top Info Bar */}
      <div className="bg-brandBlue text-white text-sm font-medium w-full">
        <div className="flex justify-between items-center py-2 px-8 w-full">

          {/* LEFT: Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FiMail className="text-white text-lg" />
              <a
                href="mailto:admin@hmkam.ca"
                className="hover:underline text-white"
              >
                admin@hmkam.ca
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FiPhone className="text-white text-lg" />
              <a href="tel:9057919274" className="hover:underline text-white">
                (905) 791-9274
              </a>
            </div>
          </div>

          {/* CENTER: Slogan */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
            ✨ Clean • Fast • Reliable Laundry Service — Visit Wash Depot Today!
          </div>
        </div>
      </div>

      {/* ⚪ Main Navbar */}
      <nav className="bg-white py-5 px-12 flex items-center justify-between shadow-md">
        {/* LEFT: Logo + Title */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "/");
          }}
          className="flex items-center space-x-3 hover:opacity-90 transition cursor-pointer"
        >
          <img src={logo} alt="Wash Depot Logo" className="h-14 w-auto" />
          <h1 className="text-3xl font-extrabold text-black tracking-wide">
            WASH DEPOT
          </h1>
        </a>

        {/* RIGHT: Menu + Button */}
        <div className="flex items-center space-x-10">
          <ul className="flex space-x-10 text-lg font-bold text-gray-800">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.history.pushState(null, "", "/");
                }}
                className="hover:text-brandBlue transition cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-brandBlue transition">
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-brandBlue transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-brandBlue transition">
                Contact
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            className="bg-brandBlue text-white text-lg font-bold px-7 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Drop Off Today
          </a>
        </div>
      </nav>
    </header>
  );
}
