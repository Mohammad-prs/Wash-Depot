import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="w-full bg-white text-black shadow-md fixed top-0 left-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-brandBlue text-white text-sm text-center py-2">
        🧺 Clean • Fast • Reliable Laundry Service — Visit Wash Depot Today!
      </div>

      {/* Main Navigation */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Wash Depot Logo" className="h-14 w-auto object-contain" />
          <h1 className="text-2xl font-extrabold tracking-wide">WASH DEPOT</h1>
        </div>

        {/* Links */}
        <ul className="flex space-x-10 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-blue-700 transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-700 transition-colors duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-blue-700 transition-colors duration-200">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-700 transition-colors duration-200">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="bg-brandBlue text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Drop Off Today
        </a>
      </nav>
    </header>
  );
}
