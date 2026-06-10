import { Briefcase, MapPin, Layers, Search, Users, Building2 } from "lucide-react";

 function Hero() {
  return (
    <section className="h-screen  bg-cover bg-center relative">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')]
        bg-cover bg-center blur-md scale-110"
      ></div>
      
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Find Your Dream Job Today!
        </h1>

        <p className="text-gray-300 mb-8 text-center max-w-xl">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-lg flex flex-col md:flex-row gap-3 p-4 w-full max-w-3xl">
          
          <div className="flex items-center gap-2 flex-1 px-4">
            <Briefcase size={18} className="text-gray-400" />
            <input
              className="w-full py-2 outline-none text-black"
              placeholder="Job Title"
            />
          </div>

          <div className="flex items-center gap-2 px-4">
            <MapPin size={18} className="text-gray-400" />
            <select className="outline-none text-black py-3">
              <option>Select Location</option>
            </select>
          </div>

          <div className="flex items-center gap-2 px-4">
            <Layers size={18} className="text-gray-400" />
            <select className="outline-none text-black py-3">
              <option>Select Category</option>
            </select>
          </div>

          <button className="bg-emerald-500 text-white px-6 py-3 rounded-md flex items-center gap-2">
            <Search size={18} />
            Search Job
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-12">
          <div className="flex items-center gap-3">
            <Briefcase className="text-emerald-500" />
            <div>
              <h3 className="font-bold">25,850</h3>
              <p className="text-sm text-gray-400">Jobs</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="text-emerald-500" />
            <div>
              <h3 className="font-bold">10,250</h3>
              <p className="text-sm text-gray-400">Candidates</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Building2 className="text-emerald-500" />
            <div>
              <h3 className="font-bold">18,400</h3>
              <p className="text-sm text-gray-400">Companies</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
export default Hero;