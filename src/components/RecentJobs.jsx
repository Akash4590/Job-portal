const jobs = [
  {
    title: "Forward Security Director",
    company: "Harris & Subram",
    location: "New York, USA",
    type: "Full Time",
    salary: "$4000-$6000",
  },
  {
    title: "Regional Creative Facilitator",
    company: "Medin - Burco Co",
    location: "Los Angeles, USA",
    type: "Part Time",
    salary: "$2500-$3200",
  },
  {
    title: "Regional Creative Facilitator",
    company: "Medin - Burco Co",
    location: "Los Angeles, USA",
    type: "Part Time",
    salary: "$2500-$3200",
  },
  {
    title: "Regional Creative Facilitator",
    company: "Medin - Burco Co",
    location: "Los Angeles, USA",
    type: "Part Time",
    salary: "$2500-$3200",
  },
  {
    title: "Regional Creative Facilitator",
    company: "Medin - Burco Co",
    location: "Los Angeles, USA",
    type: "Part Time",
    salary: "$2500-$3200",
  },
];

export default function RecentJobs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between mb-8">
          <h2 className="text-2xl font-bold">Recent Jobs Available</h2>
          <button className="text-emerald-600">View all</button>
        </div>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="border rounded-lg p-6 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-gray-500 text-sm">
                  {job.company} • {job.location}
                </p>
                <p className="text-sm text-gray-400">
                  {job.type} • {job.salary}
                </p>
              </div>

              <button className="bg-emerald-500 text-white px-4 py-2 rounded">
                Job Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}