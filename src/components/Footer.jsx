export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        
        {/* Column 1 */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Job Portal
          </h2>
          <p className="text-sm leading-6">
            Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam nihil molestiae consequatur.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Partners</li>
            <li>For Candidates</li>
            <li>For Employers</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">
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
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get latest job updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full outline-none text-black"
            />
            <button className="bg-emerald-500 px-4 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-6 text-center text-sm">
        © 2026 Job Portal. All Rights Reserved.
      </div>
    </footer>
  );
}