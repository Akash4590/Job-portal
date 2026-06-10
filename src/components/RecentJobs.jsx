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
      salary: "$40000-$42000",
      location: "New-York, USA",
      logo: <FcGlobe className="text-4xl" />,
    },
    {
      time: "12 min ago",
      title: "Regional Creative Facilitator",
      company: "Wisozk - Becker Co",
      category: "Media",
      type: "Part time",
      salary: "$28000-$32000",
      location: "Los-Angeles, USA",
      logo: <FcSynchronize className="text-4xl" />,
    },
    {
      time: "15 min ago",
      title: "Internal Integration Planner",
      company: "Mraz, Quigley and Feest Inc.",
      category: "Construction",
      type: "Full time",
      salary: "$48000-$50000",
      location: "Texas, USA",
      logo: <FcEngineering className="text-4xl" />,
    },
    {
      time: "24 min ago",
      title: "District Intranet Director",
      company: "VonRueden - Weber Co",
      category: "Commerce",
      type: "Full time",
      salary: "$42000-$48000",
      location: "Florida, USA",
      logo: <FcWorkflow className="text-4xl" />,
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Recent Jobs Available
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet...
            </p>
          </div>

          <button className="hidden md:block text-[#34A28F] font-semibold underline">
            View all
          </button>
        </div>

        {/* Job Cards */}
        <div className="space-y-7">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm px-6 py-5"
            >
              {/* Top Row */}
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#EEF9F6] text-[#34A28F] text-xs px-3 py-1 rounded-md">
                  {job.time}
                </span>

                <FaRegBookmark className="text-gray-400 text-lg cursor-pointer" />
              </div>

              {/* Main Content */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="mt-1">{job.logo}</div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                      {job.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {job.company}
                    </p>

                    {/* Info Row */}
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-5 text-sm text-gray-500">
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

                {/* Right */}
                <button
                  className="
                    bg-[#34A28F]
                    hover:bg-[#2d8f7d]
                    text-white
                    text-sm
                    font-medium
                    px-5
                    py-2.5
                    rounded-lg
                    whitespace-nowrap
                  "
                >
                  Job Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <button className="text-[#34A28F] font-semibold underline">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}