export default function Blog() {
  const blogs = [
    {
      category: "News",
      date: "30 March 2024",
      title:
        "Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Blog",
      date: "30 March 2024",
      title:
        "How To Avoid The Top Six Most Common Job Interview Mistakes",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              News and Blog
            </h2>

            <p className="text-gray-500 max-w-xl">
              Metus faucibus sed turpis lectus feugiat tincidunt.
              Rhoncus sed tristique in dolor.
            </p>
          </div>

          <button className="text-emerald-600 font-medium hover:underline cursor-pointer">
            View all
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl h-72 shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-medium px-4 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="mt-5">
                <p className="text-gray-400 text-sm mb-3">
                  {blog.date}
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 leading-snug mb-5 transition-colors duration-300 group-hover:text-emerald-600">
                  {blog.title}
                </h3>

                <button className="flex items-center gap-2 text-emerald-600 font-medium transition-all duration-300 hover:gap-3 cursor-pointer">
                  Read more
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}