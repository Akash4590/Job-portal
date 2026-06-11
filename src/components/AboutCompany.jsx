function AboutCompany() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* IMAGE */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[380px] rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Good Life Begins With
              <br className="hidden sm:block" />
              A Good Company
            </h2>

            <p className="mt-5 sm:mt-6 text-gray-500 leading-7 max-w-xl mx-auto md:mx-0">
              Ultricies purus dolor viverra mi laoreet at cursus justo.
              Ultrices purus diam egestas amet faucibus tempor blandit.
              Elit velit mauris aliquam est diam.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 justify-center md:justify-start">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition w-full sm:w-auto">
                Search Job
              </button>

              <button className="text-teal-600 font-medium hover:underline">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16 sm:mt-20 text-center md:text-left">

          {/* STAT 1 */}
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold text-teal-500">
              12k+
            </h3>
            <h4 className="mt-3 text-xl sm:text-2xl font-semibold text-black">
              Clients worldwide
            </h4>
            <p className="mt-3 text-gray-500 leading-7 max-w-sm mx-auto md:mx-0">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            </p>
          </div>

          {/* STAT 2 */}
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold text-teal-500">
              20k+
            </h3>
            <h4 className="mt-3 text-xl sm:text-2xl font-semibold text-black">
              Active resumes
            </h4>
            <p className="mt-3 text-gray-500 leading-7 max-w-sm mx-auto md:mx-0">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            </p>
          </div>

          {/* STAT 3 */}
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold text-teal-500">
              18k+
            </h3>
            <h4 className="mt-3 text-xl sm:text-2xl font-semibold text-black">
              Companies
            </h4>
            <p className="mt-3 text-gray-500 leading-7 max-w-sm mx-auto md:mx-0">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutCompany;