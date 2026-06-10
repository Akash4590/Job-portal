 import { Briefcase, Home, LogIn, UserPlus } from "lucide-react";
 function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 text-white absolute w-full z-10">
    <h1 className="text-xl font-bold flex items-center gap-2">
  <Briefcase size={22} />
  Job Portal
</h1>

      <ul className="flex gap-8 text-sm">
       <li className="
  cursor-pointer 
  text-white 
  hover:text-emerald-400 
  transition-colors 
  duration-300
">
  Home
</li>
       <li className="
  cursor-pointer 
  inline-block
  text-white
  border-b-2 
  border-transparent
  hover:border-emerald-400
  hover:text-emerald-400
  transition-all 
  duration-300
">
  Home
</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div className="flex gap-4">
        <button>Login</button>
        <button className="bg-emerald-500 px-4 py-2 rounded-md">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar