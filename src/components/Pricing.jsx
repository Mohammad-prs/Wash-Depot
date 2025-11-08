export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Pricing</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2 text-black-600">Self Service</h3>
          <p className="text-gray-700 mb-4">Starting from $3.00 / wash</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow border-2 border-blue-600">
          <h3 className="text-xl font-semibold mb-2 text-black-600">Wash & Fold</h3>
          <p className="text-gray-700 mb-4">$1.25 / lb — clean, fresh, and ready to go</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2 text-black-600">Dry Cleaning</h3>
          <p className="text-gray-700 mb-4">Contact us for special garments</p>
        </div>
      </div>
    </section>
  );
}
