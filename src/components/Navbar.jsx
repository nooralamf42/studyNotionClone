import { Link, NavLink } from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx"

export default function () {
  return (
    <nav className="flex justify-between mx-auto">
      <Link to="/">
        <img
          src="https://codehelp-router-project.netlify.app/static/media/Logo.0d90853fa1468dbe2d8d82c0ea06b8b1.svg"
          alt=""
        />
      </Link>
      <div className="hidden md:block">
        <NavLink to="/" className="px-2 text-lg text-white">
          Home
        </NavLink>
        <NavLink to="/about" className="px-2 text-lg text-white">
          About
        </NavLink>
        <NavLink to="/contact" className="px-2 text-lg text-white">
          Contact
        </NavLink>
      </div>

      <div className="hidden md:block">
        <Link
          to="/login"
          className="bg-[#161d29] text-gray-400 py-2 border border-gray-600 text-lg px-3 mr-2 rounded-lg "
        >
          Log in
        </Link>
        <Link 
        to="/signup"
        className="bg-[#161d29] text-gray-400 py-2 border border-gray-600 text-lg px-3 mr-2 rounded-lg ">
          Sign up
        </Link>
      </div>
      <button className="md:hidden">
        <RxHamburgerMenu color="white" size={25}/>
      </button>
    </nav>
  );
}
