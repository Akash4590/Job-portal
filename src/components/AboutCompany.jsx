function AboutCompany() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image Card */}
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80')",
            }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* Text Over Image (Optional) */}
          <div className="relative z-10 flex h-full items-end p-6">
            <div>
              <h3 className="text-white text-2xl font-bold">
                Find Your Dream Job
              </h3>
              <p className="text-gray-200 mt-2">
                Discover thousands of opportunities with top companies.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Good Life Begins With A Good Company
          </h2>

          <p className="text-gray-500 leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Find
            the best companies and explore exciting career opportunities that
            match your skills and passion.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition duration-300">
              Search Job
            </button>

            <button className="text-emerald-600 font-semibold hover:underline">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutCompany;