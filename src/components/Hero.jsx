import laundryHero from "../assets/laundry-hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-4 pt-20"
      style={{
        backgroundImage: `url(${laundryHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* dark overlay */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-serifLogo font-bold text-white mb-4 drop-shadow-lg">
  Clean Clothes, Fresh Start.
</h1>

        <p className="text-lg mb-8 drop-shadow-md">
          Welcome to Wash Depot — your local coin laundry offering spotless washes,
          fast drying, and full-service wash & fold.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Drop Off Today
        </a>
      </div>
    </section>
  );
}
