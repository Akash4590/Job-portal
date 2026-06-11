import {
  Briefcase,
  MapPin,
  Layers,
  Search,
  Users,
  Building2,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')]
        bg-cover bg-center blur-sm scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-10 text-white sm:pt-28">
        {/* Heading */}
        <h1 className="max-w-4xl text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Find Your Dream Job Today!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 mb-8 max-w-2xl px-2 text-center text-sm text-gray-300 sm:text-base">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        {/* Search Box */}
        <div className="w-full max-w-5xl rounded-2xl bg-white p-3 shadow-2xl sm:p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-0">
            {/* Job Title */}
            <div className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-gray-200 px-4 lg:rounded-none lg:border-0 lg:border-r">
              <Briefcase
                size={18}
                className="flex-shrink-0 text-gray-400"
              />
              <input
                type="text"
                placeholder="Job Title"
                className="w-full bg-transparent text-sm text-black outline-none"
              />
            </div>

            {/* Mobile: Location + Category in one row */}
            <div className="flex gap-3 lg:flex-1 lg:gap-0">
              {/* Location */}
              <div className="flex h-12 flex-1 items-center gap-2 rounded-xl border border-gray-200 px-3 lg:rounded-none lg:border-0 lg:border-r lg:px-4">
                <MapPin
                  size={18}
                  className="flex-shrink-0 text-gray-400"
                />
                <select className="w-full bg-transparent text-sm text-black outline-none">
                  <option>Location</option>
                  <option>Remote</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>

              {/* Category */}
              <div className="flex h-12 flex-1 items-center gap-2 rounded-xl border border-gray-200 px-3 lg:rounded-none lg:border-0 lg:border-r lg:px-4">
                <Layers
                  size={18}
                  className="flex-shrink-0 text-gray-400"
                />
                <select className="w-full bg-transparent text-sm text-black outline-none">
                  <option>Category</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 text-sm font-medium text-white transition hover:bg-emerald-600 lg:ml-3 lg:w-auto whitespace-nowrap">
              <Search size={18} />
              Search Job
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-5 text-center sm:mt-12 sm:gap-8 md:grid-cols-3">
          {/* Jobs */}
          <div className="flex items-center justify-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
            <Briefcase className="text-emerald-500" />
            <div className="text-left">
              <h3 className="text-lg font-bold">25,850</h3>
              <p className="text-sm text-gray-300">Jobs</p>
            </div>
          </div>

          {/* Candidates */}
          <div className="flex items-center justify-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
            <Users className="text-emerald-500" />
            <div className="text-left">
              <h3 className="text-lg font-bold">10,250</h3>
              <p className="text-sm text-gray-300">Candidates</p>
            </div>
          </div>

          {/* Companies */}
          <div className="col-span-2 flex items-center justify-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm md:col-span-1">
            <Building2 className="text-emerald-500" />
            <div className="text-left">
              <h3 className="text-lg font-bold">18,400</h3>
              <p className="text-sm text-gray-300">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;