import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function ({isLogged, setIsLogged}) {

  let [showMenu, setShowMenu] = useState(false)

  function menuHandler(){
    setShowMenu((value)=>!value)
    console.log(showMenu)
  }

  return (
    <nav className="flex justify-between mx-auto relative">
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
        {isLogged ? <div>
          <Link
            to="/dashboard"
            className="bg-[#161d29] text-gray-400 py-2 border border-gray-600 text-lg px-3 mr-2 rounded-lg "
          >
            Dashboard
          </Link>
          <Link
            to="/"
            onClick={()=>setIsLogged(false)}
            className="bg-[#161d29] text-gray-400 py-2 border border-gray-600 text-lg px-3 mr-2 rounded-lg "
          >
            Logout
          </Link>
        </div> :
          <div>
          <Link
            to="/login"
            className="bg-[#161d29] text-gray-400 py-2 border border-gray-600 text-lg px-3 mr-2 rounded-lg "
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-[#161d29] text-gray-400 py-2 border border-gray-600 text-lg px-3 mr-2 rounded-lg "
          >
            Sign up
          </Link>
        </div>
        }        
        
      </div>      
      <button className={`md:hidden ${showMenu && 'rotate-90'}`} onClick={menuHandler}>
        <RxHamburgerMenu color="white" size={25} />
      </button>
      <div className={`absolute z-[99] border border-gray-700 rounded-lg text-center right-0 top-[50px] w-[fit] p-3 bg-[#000814] ${showMenu? 'block' : 'hidden'}`}>
        <div className="flex flex-col">
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
        <div className="">
        {isLogged ? <div className="flex flex-col gap-2 mt-1">
          <Link
            to="/dashboard"
            className="bg-[#161d29] text-gray-400 py-1 border border-gray-600 text-lg px-2 rounded-lg "
          >
            Dashboard
          </Link>
          <Link
            to="/"
            onClick={()=>setIsLogged(false)}
            className="bg-[#161d29] text-gray-400 py-1 border border-gray-600 text-lg px-2 rounded-lg "
          >
            Logout
          </Link>
        </div> :
          <div className="flex flex-col gap-2 mt-1">
          <Link
            to="/login"
            className="bg-[#161d29] text-gray-400 py-1 border border-gray-600 text-lg px-2 rounded-lg "
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-[#161d29] text-gray-400 py-1 border border-gray-600 text-lg px-2 rounded-lg "
          >
            Sign up
          </Link>
        </div>
        }        
        
      </div>
      </div>
    </nav>
  );
}
