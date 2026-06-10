const categories = [
  "Agriculture",
  "Metal Production",
  "Commerce",
  "Construction",
  "Hotels & Tourism",
  "Education",
  "Financial Services",
  "Transport",
];

export default function Categories() {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md"
            >
              <h3 className="font-medium">{cat}</h3>
              <p className="text-sm text-gray-400">120 Jobs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}