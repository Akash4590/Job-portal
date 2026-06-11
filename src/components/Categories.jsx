import {
  FaSeedling,
  FaIndustry,
  FaStore,
  FaHardHat,
  FaHotel,
  FaGraduationCap,
  FaMoneyBillWave,
  FaTruck,
} from "react-icons/fa";

const categories = [
  {
    name: "Agriculture",
    jobs: "1254 Jobs",
    icon: <FaSeedling size={34} className="text-teal-500" />,
  },
  {
    name: "Metal Production",
    jobs: "816 Jobs",
    icon: <FaIndustry size={34} className="text-teal-500" />,
  },
  {
    name: "Commerce",
    jobs: "2082 Jobs",
    icon: <FaStore size={34} className="text-teal-500" />,
  },
  {
    name: "Construction",
    jobs: "1520 Jobs",
    icon: <FaHardHat size={34} className="text-teal-500" />,
  },
  {
    name: "Hotels & Tourism",
    jobs: "1022 Jobs",
    icon: <FaHotel size={34} className="text-teal-500" />,
  },
  {
    name: "Education",
    jobs: "1496 Jobs",
    icon: <FaGraduationCap size={34} className="text-teal-500" />,
  },
  {
    name: "Financial Services",
    jobs: "1529 Jobs",
    icon: <FaMoneyBillWave size={34} className="text-teal-500" />,
  },
  {
    name: "Transport",
    jobs: "1244 Jobs",
    icon: <FaTruck size={34} className="text-teal-500" />,
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Browse by Category
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque rhoncus.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="
                bg-white
                h-52
                rounded-3xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                hover:-translate-y-1
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {/* Icon */}
              <div className="mb-5">{cat.icon}</div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {cat.name}
              </h3>

              {/* Jobs Badge */}
              <div className="mt-4">
                <span className="inline-flex items-center bg-teal-50 text-teal-600 text-xs font-medium px-3 py-1.5 rounded-md">
                  {cat.jobs}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}