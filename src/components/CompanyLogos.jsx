import { FaSpotify, FaSlack } from "react-icons/fa";
import { SiLinear } from "react-icons/si";

function CompanyLogos() {
  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center text-white">
          
          {/* Spotify */}
          <div className="flex items-center gap-2 text-lg font-medium cursor-pointer hover:text-emerald-400 transition duration-300">
            <FaSpotify className="text-2xl text-white" />
            <span>Spotify</span>
          </div>

          {/* Slack */}
          <div className="flex items-center gap-2 text-lg font-medium cursor-pointer hover:text-emerald-400 transition duration-300">
            <FaSlack className="text-2xl text-white" />
            <span>Slack</span>
          </div>

          {/* Adobe */}
          <div className="flex items-center gap-2 text-lg font-medium cursor-pointer hover:text-emerald-400 transition duration-300">
            <img
              src="https://cdn.simpleicons.org/adobe/white"
              alt="Adobe"
              className="w-6 h-6"
            />
            <span>Adobe</span>
          </div>

          {/* Asana */}
          <div className="flex items-center gap-2 text-lg font-medium cursor-pointer hover:text-emerald-400 transition duration-300">
            <img
              src="https://cdn.simpleicons.org/asana/white"
              alt="Asana"
              className="w-6 h-6"
            />
            <span>Asana</span>
          </div>

          {/* Linear */}
          <div className="flex items-center gap-2 text-lg font-medium cursor-pointer hover:text-emerald-400 transition duration-300 col-span-2 sm:col-span-1">
            <SiLinear className="text-2xl text-white" />
            <span>Linear</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CompanyLogos;