import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
