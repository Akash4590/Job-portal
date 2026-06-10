import { useState } from "react";
import { Briefcase, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-sm text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <Briefcase
            size={24}
            className="group-hover:text-emerald-400 transition-colors duration-300"
          />
          <h1 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors duration-300">
            Job Portal
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-emerald-400 transition-colors duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-emerald-400 transition-colors duration-300">
            Jobs
          </li>
          <li className="cursor-pointer hover:text-emerald-400 transition-colors duration-300">
            About Us
          </li>
          <li className="cursor-pointer hover:text-emerald-400 transition-colors duration-300">
            Contact Us
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button
            type="button"
            className="cursor-pointer hover:text-emerald-400 transition-colors duration-300"
          >
            Login
          </button>

          <button
            type="button"
            className="cursor-pointer bg-emerald-500 hover:bg-emerald-600 px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-base font-medium">
            <li className="cursor-pointer hover:text-emerald-400 transition-colors duration-300">
              Home
            </li>
            <li className="cursor-pointer hover:text-emerald-400 transition-colors duration-300">
              Jobs
            </li>
            <li className="cursor-pointer hover:text-emerald-400 transition-colors duration-300">
              About Us
            </li>
            <li className="cursor-pointer hover:text-emerald-400 transition-colors duration-300">
              Contact Us
            </li>

            <div className="flex flex-col gap-3 w-4/5 mt-4">
              <button className="border border-white py-2 rounded-lg hover:bg-white hover:text-black transition">
                Login
              </button>

              <button className="bg-emerald-500 hover:bg-emerald-600 py-2 rounded-lg transition">
                Register
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;