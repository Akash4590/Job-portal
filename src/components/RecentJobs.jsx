import {
  FaRegBookmark,
  FaBriefcase,
  FaRegClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import {
  FcGlobe,
  FcWorkflow,
  FcEngineering,
  FcSynchronize,
} from "react-icons/fc";

export default function RecentJobs() {
  const jobs = [
    {
      time: "10 min ago",
      title: "Forward Security Director",
      company: "Bauch, Schuppe and Schulist Co",
      category: "Hotels & Tourism",
      type: "Full time",
      salary: "$40,000-$42,000",
      location: "New York, USA",
      logo: <FcGlobe className="text-4xl" />,
    },
    {
      time: "12 min ago",
      title: "Regional Creative Facilitator",
      company: "Wisozk - Becker Co",
      category: "Media",
      type: "Part time",
      salary: "$28,000-$32,000",
      location: "Los Angeles, USA",
      logo: <FcSynchronize className="text-4xl" />,
    },
    {
      time: "15 min ago",
      title: "Internal Integration Planner",
      company: "Mraz, Quigley and Feest Inc.",
      category: "Construction",
      type: "Full time",
      salary: "$48,000-$50,000",
      location: "Texas, USA",
      logo: <FcEngineering className="text-4xl" />,
    },
    {
      time: "24 min ago",
      title: "District Intranet Director",
      company: "VonRueden - Weber Co",
      category: "Commerce",
      type: "Full time",
      salary: "$42,000-$48,000",
      location: "Florida, USA",
      logo: <FcWorkflow className="text-4xl" />,
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-16 md:py-20">
      {/* Reduced Width Container */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Recent Jobs Available
            </h2>

            <p className="mt-3 text-sm text-gray-500 max-w-2xl">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
              Blandit a massa elementum id scelerisque rhoncus.
            </p>
          </div>

          <button className="text-[#34A28F] font-semibold underline">
            View all
          </button>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[24px]
                shadow-sm
                px-5
                md:px-7
                py-5
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              {/* Top Row */}
              <div className="flex justify-between items-center mb-5">
                <span className="bg-[#EEF9F6] text-[#34A28F] text-xs font-medium px-3 py-1 rounded-md">
                  {job.time}
                </span>

                <FaRegBookmark className="text-gray-400 text-lg cursor-pointer" />
              </div>

              {/* Main Content */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                {/* Left Side */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="shrink-0">{job.logo}</div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                      {job.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {job.company}
                    </p>

                    {/* Job Info */}
                    <div className="flex flex-wrap gap-x-8 gap-y-3 mt-5 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-[#34A28F]" />
                        <span>{job.category}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaRegClock className="text-[#34A28F]" />
                        <span>{job.type}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <RiMoneyDollarBoxLine className="text-[#34A28F] text-lg" />
                        <span>{job.salary}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#34A28F]" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  className="
                    bg-[#34A28F]
                    hover:bg-[#2b8c7c]
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    text-sm
                    font-medium
                    whitespace-nowrap
                  "
                >
                  Job Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}