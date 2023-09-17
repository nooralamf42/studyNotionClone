import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

export default function TemplateLoginSignup({
  title,
  desc,
  italicDesc,
  formType,
  thumbnail,
  setIsLogged,
  isLogged,
}) {
  return (
    <div className="flex flex-col-reverse gap-8 md:gap-6 md:flex-row items-center md:justify-between md:items-start py-10">
      <div className="py-8 md:w-2/4 max-w-[450px] overflow-hidden w-[100%] px-2">
        <h1 className="text-3xl text-white font-bold">{title}</h1>
        <p className="text-gray-300 text-xl my-5">
          {desc}
          <span className="italic text-sky-400"> {italicDesc}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setIsLogged={setIsLogged} isLogged={isLogged} />
        ) : (
          <LoginForm setIsLogged={setIsLogged} isLogged={isLogged} />
        )}

        <div className="relative w-[100%] text-gray-600">
          <span className="absolute w-full -top-2">
            <p className="bg-[#000814] text-sm px-2 w-fit mx-auto">OR</p>
          </span>
          <hr className="my-6 border-1 border-gray-700" />
        </div>
        <button
          type="button"
          className="w-full text-gray-300 rounded-lg mt-1 flex justify-center items-center gap-2 py-2 border-gray-700 border"
        >
          <FcGoogle size={23} />
          Sign in with Google
        </button>
      </div>

      <div className="relative md:w-2/4 max-w-[450px]">
        <div className="relative">
          <img className="z-40 relative" src={thumbnail} alt="" />
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
