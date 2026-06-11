import {
  MapPin,
  Briefcase,
  DollarSign,
} from "lucide-react";

const badgeStyles = {
  Featured: "bg-emerald-100 text-emerald-600",
  Urgent: "bg-red-100 text-red-600",
  Remote: "bg-blue-100 text-blue-600",
  New: "bg-purple-100 text-purple-600",
};

const JobCard = ({ job }) => {
  return (
    <div className=" rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Badge */}
      <div className="flex justify-between items-start mb-4">
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${badgeStyles[job.badge]}`}
        >
          {job.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-1">
        {job.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        {job.company}
      </p>

      {/* Meta */}
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          <span>{job.type}</span>
        </div>

        <div className="flex items-center gap-2">
          <DollarSign size={16} />
          <span>{job.salary}</span>
        </div>
      </div>

      {/* CTA */}
      <button className="mt-6 w-full bg-emerald-500 text-white py-2.5 rounded-xl hover:bg-emerald-600 transition font-medium">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;