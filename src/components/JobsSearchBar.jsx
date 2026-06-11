import { Search, ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const categories = [
  { label: "All", value: "all" },
  { label: "Development", value: "development" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Backend", value: "backend" },
  { label: "Mobile App", value: "mobile-app" },
  { label: "SEO", value: "seo" },
];

const JobsSearchBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected =
    categories.find((item) => item.value === selectedCategory) ||
    categories[0];

  return (
    <section className="mt-20 md:mt-24 mb-10 md:mb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-3 sm:p-4">
          <div className="flex items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs..."
                className="w-full h-12 pl-10 pr-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
            </div>

            {/* Custom Dropdown */}
            <div className="relative w-24 sm:w-40" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between px-3 text-sm hover:border-emerald-400 focus:ring-2 focus:ring-emerald-400"
              >
                <span className="truncate">{selected.label}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                  <ul className="max-h-60 overflow-y-auto py-1">
                    {categories.map((item) => (
                      <li key={item.value}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCategory(item.value);
                            setOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left hover:bg-emerald-50 transition ${
                            selectedCategory === item.value
                              ? "bg-emerald-100 text-emerald-700"
                              : "text-gray-700"
                          }`}
                        >
                          {item.label}
                          {selectedCategory === item.value && (
                            <Check size={15} />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSearchBar;