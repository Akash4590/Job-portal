 function AboutCompany() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="h-64 bg-gray-300 rounded-lg"></div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Good Life Begins With A Good Company
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctus nec ullamcorper mattis.
          </p>

          <button className="bg-emerald-500 text-white px-6 py-3 rounded">
            Search Job
          </button>
        </div>
      </div>
    </section>
  );
}
export default AboutCompany