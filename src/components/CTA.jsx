export default function CTA() {
  return (
    <section className="py-14 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative min-h-[320px] sm:min-h-[350px] rounded-3xl overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center px-5 sm:px-10 md:px-16">
            <div className="max-w-xl text-white text-center md:text-left">

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                Create A Better
                <br className="hidden sm:block" />
                Future For Yourself
              </h2>

              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                Discover thousands of career opportunities and connect with the
                best companies to build the future you deserve.
              </p>

              <button className="bg-teal-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
                Search Job
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}