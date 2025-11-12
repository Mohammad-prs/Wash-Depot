import React from "react";
import laundryVideo from "../assets/laundry-hero.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={laundryVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay (optional dark filter for contrast) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Clean Clothes, Fresh Start.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Welcome to Wash Depot — your local coin laundry offering spotless
          washes, fast drying, full-service wash & fold and Dry Cleaning.
        </p>
        <a
          href="#contact"
          className="bg-brandBlue text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Drop Off Today
        </a>
      </div>
    </section>
  );
}
