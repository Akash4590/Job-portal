export default function Testimonials() {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Testimonials from Our Customers
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg">
              <p className="text-gray-500 mb-4">
                Amazing services and easy to use platform.
              </p>
              <h4 className="font-semibold">Client Name</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}