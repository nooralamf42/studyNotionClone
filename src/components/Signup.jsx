import PasswordInput from "./PasswordInput";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Signup({showToast}) {
  function clickHandler (){
    // let navigate = useNavigate()
    showToast("Account Created", "success")
    // navigate("/dashboard")
  }
  return (
    <div className="flex flex-col-reverse gap-8 md:gap-6 md:flex-row items-center md:justify-between md:items-start py-10">
      <div className="py-8 md:w-2/4 max-w-[450px]">
        <h1 className="text-3xl text-white font-bold">
          Join the millions learning to code with StudyNotion for free
        </h1>
        <p className="text-gray-300 text-xl my-5">
          Build skills for today, tomorrow, and beyond.
          <span className="italic text-sky-400">
            {" "}
            Education to future-proof your career.
          </span>
        </p>
        <form action="/dashboard" className="flex flex-col text-gray-300">
          <div className="bg-[#161d29] rounded-full flex justify-between p-1 w-[220px] gap-1">
            <button className="rounded-full text-lg bg-[#000814] px-4 py-2">
              Student
            </button>
            <button className="rounded-full text-lg active:bg-[#000814] px-4 py-2">
              Instructor
            </button>
          </div>

          {/* name section */}
        <div className="flex justify-between">
          <div className="flex flex-col mb-3 w-[48%]">
            <label htmlFor="fname">
              First Name <sup className="text-red-500">*</sup>
            </label>
            <input
              required
              className="px-2 py-2 rounded-lg text-lg bg-[#161d29] mt-1 border-b border-gray-600"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col mb-3 w-[48%]">
            <label htmlFor="lname">
              Last Name <sup className="text-red-500">*</sup>
            </label>
            <input
            required
              className="px-2 py-2 rounded-lg text-lg bg-[#161d29] mt-1 border-b border-gray-600"
              type="text"
              id="lname"
              placeholder="Enter your last name"
            />
          </div>
          </div>

          <label htmlFor="email">
            Email Address <sup className="text-red-500">*</sup>
          </label>
          <input
            className="px-2 py-2 rounded-lg text-lg bg-[#161d29] mt-1 border-b border-gray-600"
            placeholder="Enter email address"
          />
          
          <div className="flex justify-between">
          <div className="flex flex-col w-[48%]">
          <label className="mt-3" htmlFor="pass">
            Create Password <sup className="text-red-500">*</sup>
          </label>
          <PasswordInput/>
          </div>
          <div className="flex flex-col w-[48%]">
          <label className="mt-3" htmlFor="confPass">
            Confirm Password <sup className="text-red-500">*</sup>
          </label>
          <PasswordInput/>
          </div>
          </div>

          <button type="button" onClick={clickHandler} className="mt-14 w-full bg-[#ffd60a] text-black text-md rounded-lg py-2 font-semibold">
            Create Account
          </button>
          <div className="relative w-[100%] text-gray-600">
            <span className="absolute w-full top-[30%]">
              <p className="bg-[#000814] text-sm px-2 w-fit mx-auto">OR</p>
            </span>
            <hr className="my-6 border-1 border-gray-700" />
          </div>
          <button type="button" className="w-full rounded-lg mt-1 flex justify-center items-center gap-2 py-2 border-gray-700 border">
            <FcGoogle size={23} />
            Sign in with Google
          </button>
        </form>
      </div>
      <div className="relative md:w-2/4 max-w-[450px]">
        <div className="relative">
          <img
            className="z-40 relative"
            src="https://codehelp-router-project.netlify.app/static/media/signup.b431d919de01b6515dd6.png"
            alt=""
          />
          <div>
            <img
              className="absolute top-5 left-5"
              src="https://codehelp-router-project.netlify.app/static/media/frame.3a238e5f26d676376e1d.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
