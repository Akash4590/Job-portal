export default function Blog() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between mb-8">
          <h2 className="text-2xl font-bold">News and Blog</h2>
          <button className="text-emerald-600">View all</button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-56 bg-gray-300 rounded-lg"></div>
          <div className="h-56 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}