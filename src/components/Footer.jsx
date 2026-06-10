export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">
              Job
            </h2>

            <p className="text-sm leading-6 max-w-xs">
              Quis enim pellentesque viverra tellus eget malesuada
              facilisis. Congue nibh vivamus aliquet nunc mauris.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Company
            </h3>

            <ul className="space-y-2 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">For Candidates</a></li>
              <li><a href="#">For Employers</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Job Categories
            </h3>

            <ul className="space-y-2 text-sm">
              <li>Telecommunications</li>
              <li>Hotels & Tourism</li>
              <li>Construction</li>
              <li>Education</li>
              <li>Financial Services</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Newsletter
            </h3>

            <p className="text-sm mb-3 leading-6">
              Eu nunc pretium vitae platea. Non netus elementum vulputate.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  bg-transparent
                  border border-gray-700
                  rounded-xl
                  px-4 py-3
                  text-white
                  placeholder-gray-500
                  outline-none
                "
              />

              <button
                className="
                  w-full
                  bg-emerald-500
                  text-white
                  font-medium
                  py-3
                  rounded-xl
                "
              >
                Subscribe now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
            <p>
              © Copyright Job Portal 2024. Designed by Figma.guru
            </p>

            <div className="flex gap-5">
              <a href="#" className="underline">
                Privacy Policy
              </a>

              <a href="#" className="underline">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}