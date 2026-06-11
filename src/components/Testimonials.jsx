import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    title: "Amazing services",
    text: "Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis.",
    name: "Marco Kihn",
    role: "Happy Client",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Everything simple",
    text: "Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus.",
    name: "Kristin Hester",
    role: "Happy Client",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Awesome, thank you!",
    text: "Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus.",
    name: "Zion Cisneros",
    role: "Happy Client",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-emerald-50 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Testimonials from Our Customers
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-3xl
                p-7
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
                flex
                flex-col
                min-h-[360px]
              "
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} size={14} />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Review */}
              <p className="text-gray-500 text-sm leading-7 italic">
                {item.text}
              </p>

              {/* Bottom Section */}
              <div className="mt-auto pt-6">
                {/* Quote Icon */}
                <div className="flex justify-end mb-3">
                  <FaQuoteRight
                    size={24}
                    className="text-teal-500 opacity-80"
                  />
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {item.name}
                    </h4>

                    <p className="text-gray-400 text-xs">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}