import PasswordInput from "./PasswordInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function LoginForm({setIsLogged, isLogged}) {
  let navigate = useNavigate()
  function submitHandler(e){
    e.preventDefault()
    setIsLogged(true)
    toast.success("Welcome back");
    navigate("/dashboard")
  }
  return (
    <form onSubmit={submitHandler} className="flex flex-col text-gray-300">
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
          <PasswordInput />
          <span className="absolute text-sky-500 right-0 text-sm bottom-[-22px]">
            Forgot Password
          </span>
        </div>
        <button type="submit" className="mt-14 w-full bg-[#ffd60a] text-black text-md rounded-lg py-2 font-semibold">
          Sign In
        </button>
      </form>
  )
}
