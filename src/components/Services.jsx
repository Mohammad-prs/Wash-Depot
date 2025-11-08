export default function Services() {
  const services = [
    { title: "Self-Service Laundry", desc: "Clean, modern washers & dryers with quick cycles." },
    { title: "Wash & Fold", desc: "Drop off your laundry — we’ll wash, dry, and fold it fresh." },
    { title: "Dry Cleaning", desc: "Professional cleaning for your delicate and formal wear." },
  ];

  return (
    <section id="services" className="py-20 max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div key={i} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-black-600 mb-3">{s.title}</h3>
            <p className="text-black-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
