import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobsSearchBar from "../components/JobsSearchBar";
import JobCardGrid from "../components/JobCardGrid";
import { jobsDummy } from "../data/jobsDummy";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredJobs = jobsDummy.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

   const matchesCategory =
  selectedCategory === "all" ||
  job.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar className = 'mb-10' />

      <div className="mt-30">
        <JobsSearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <main className="bg-gray-50 min-h-screen">
          <JobCardGrid jobs={filteredJobs} />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Jobs;