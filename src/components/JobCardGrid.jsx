import JobCard from "./JobCard";

const JobCardGrid = ({ jobs }) => {
  if (!jobs.length) {
    return (
      <p className="text-center py-20 text-gray-500">
        No jobs found
      </p>
    );
  }

  return (
    <section className=" bg-white max-w-7xl mx-auto px-4 py-12">
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobCardGrid;