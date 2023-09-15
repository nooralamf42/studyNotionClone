import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex flex-col-reverse gap-8 md:gap-6 md:flex-row items-center md:justify-between md:items-start py-10">
      <div className="py-8 md:w-2/4 max-w-[450px]">
        <h1 className="text-3xl text-white font-bold">Welcome Back</h1>
        <p className="text-gray-300 text-xl my-5">
          Build skills for today, tomorrow, and beyond.
          <span className="italic text-sky-400">
            Education to future-proof your career.
          </span>
        </p>
        <form action="" className="flex flex-col text-gray-300">
          <label htmlFor="email">
            Email Address <sup className="text-red-500">*</sup>
          </label>
          <input
            className="px-2 py-2 rounded-lg text-lg bg-[#161d29] mt-1 border-b border-gray-600"
            type="email"
            placeholder="Enter email address"
          />

          <label className="mt-6" htmlFor="pass">
            Password <sup className="text-red-500">*</sup>
          </label>
          <div className="relative" id="pass">
            <input
              className="px-2 py-2 rounded-lg text-lg bg-[#161d29] mt-1 border-b border-gray-600 w-full"
              type="password"
              placeholder="Enter password"
            />
            <AiOutlineEye
              className="absolute bottom-3 right-3 hover:cursor-pointer"
              size={22}
            />
            <span className="absolute text-sky-500 right-0 text-sm bottom-[-22px]">
              Forgot Password
            </span>
          </div>

          <button className="mt-14 w-full bg-[#ffd60a] text-black text-md rounded-lg py-2 font-semibold">
            Sign In
          </button>
          <div className="relative w-[100%] text-gray-600">
            <span className="absolute w-full top-[30%]">
              <p className="bg-[#000814] text-sm px-2 w-fit mx-auto">OR</p>
            </span>
            <hr className="my-6 border-1 border-gray-700" />
          </div>
          <button className="w-full rounded-lg mt-1 flex justify-center items-center gap-2 py-2 border-gray-700 border">
            <FcGoogle size={23} />
            Sign in with Google
          </button>
        </form>
      </div>
      <div className="relative md:w-2/4 max-w-[450px]">
        <div className="relative">
          <img
            className="z-40 relative"
            src="https://codehelp-router-project.netlify.app/static/media/login.4d877a447365e5137b67.png"
            alt=""
          />
          <div>
            <img className="absolute top-5 left-5"
              src="https://codehelp-router-project.netlify.app/static/media/frame.3a238e5f26d676376e1d.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
