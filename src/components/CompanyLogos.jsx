import { FaSpotify, FaSlack } from "react-icons/fa";
import { SiLinear } from "react-icons/si";

function CompanyLogos() {
  const logoClass =
    "w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-gray-800 bg-neutral-900 hover:bg-neutral-800 hover:border-emerald-400 transition-all duration-300 cursor-pointer";

  return (
    <section className="bg-black py-8 sm:py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">

          {/* Spotify */}
          <div className={logoClass}>
            <FaSpotify className="text-xl sm:text-2xl text-white" />
            <span className="text-sm sm:text-base font-medium text-white">
              Spotify
            </span>
          </div>

          {/* Slack */}
          <div className={logoClass}>
            <FaSlack className="text-xl sm:text-2xl text-white" />
            <span className="text-sm sm:text-base font-medium text-white">
              Slack
            </span>
          </div>

          {/* Adobe */}
          <div className={logoClass}>
            <img
              src="https://cdn.simpleicons.org/adobe/white"
              alt="Adobe"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="text-sm sm:text-base font-medium text-white">
              Adobe
            </span>
          </div>

          {/* Asana */}
          <div className={logoClass}>
            <img
              src="https://cdn.simpleicons.org/asana/white"
              alt="Asana"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="text-sm sm:text-base font-medium text-white">
              Asana
            </span>
          </div>

          {/* Linear */}
          <div className="col-span-2 sm:col-span-1">
            <div className={logoClass}>
              <SiLinear className="text-xl sm:text-2xl text-white" />
              <span className="text-sm sm:text-base font-medium text-white">
                Linear
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CompanyLogos;