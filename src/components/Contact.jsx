export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-brandBlue mb-10">
        Contact Us
      </h2>

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-4">
        

        <div className="mt-8 space-y-4 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-brandBlue mb-1">📍 Address</h3>
            <p>1785 Queen St E, Brampton, ON L6T 4S3</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-brandBlue mb-1">📞 Phone</h3>
            <p>(905) 791-9274</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-brandBlue mb-1">🕒 Hours</h3>
            <p>Monday – Friday: 8:00 AM – 8:00 PM</p>
            <p>Saturday – Sunday: 7:00 AM – 8:00 PM</p>
          </div>

          <div className="pt-6">
            <a
              href="tel:9057919274"
              className="bg-brandBlue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
