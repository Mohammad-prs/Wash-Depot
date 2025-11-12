export default function PreFooter() {
  return (
    <section className="relative bg-brandBlue text-white text-center py-10 px-4 overflow-hidden">
      {/* Optional background overlay pattern (bubbles) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/bubbles-bg.png')] bg-cover bg-center"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-extrabold mb-2">Questions?</h2>
        <p className="text-xl font-semibold text-yellow-300">
          📞 <a href="tel:9057919274" className="underline hover:text-yellow-200">(905) 791-9274</a>
        </p>
        <p className="mt-2 text-base max-w-2xl mx-auto">
          We’re here to help — contact Wash Depot for service, support, or feedback!
        </p>
      </div>
    </section>
  );
}
