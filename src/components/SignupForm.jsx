import PasswordInput from "./PasswordInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState} from "react";


export default function SignupForm({setIsLogged, isLogged}) {
  let [formType, setFormType] = useState("student");
  let navi = useNavigate();
  function submitHandler(e){
    e.preventDefault();
    if(formData.confPass !== formData.pass){
      toast.error("Password do not match ") 
      return
    }
    setIsLogged(true)
    toast.success("Account Created");
    navi("/dashboard");
  }

  let [formData, setFormData] = useState({
    email: "",
    fname: "",
    lname: "",
    pass: "",
    confPass: "",
    formType: "student"
  })
  console.log(formData)

  function formTypeHandler(value){
      setFormType(value);
      formData.formType = value;
  }

  function changeHandler(e){
    setFormData(pre=>{
      return {
        ...pre,
        [e.target.name]:e.target.value
      }
    })
  }
  

  return (
    <form onSubmit={submitHandler} className="flex flex-col text-gray-300">
      <div className="bg-[#161d29] rounded-full flex justify-between p-1 w-[220px] gap-1 mb-3">
        <button type="button" onClick={()=>formTypeHandler("student")} className={`rounded-full text-lg px-4 py-2 ${formType ==='student' && 'bg-[#000814]'}`}>
          Student
        </button>
        <button type="button" onClick={()=>formTypeHandler('instructor')} className={`rounded-full text-lg px-4 py-2 ${formType ==='instructor' && 'bg-[#000814]'}`}>
          Instructor
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col mb-3 w-[48%]">
          <label htmlFor="fname">
            First Name <sup className="text-red-500">*</sup>
          </label>
          <input
            required
            onInput={changeHandler}
            className="px-2 py-2 rounded-lg text-lg bg-[#161d29] mt-1 border-b border-gray-600"
            type="text"
            placeholder="Enter your first name"
            id="fname"
            name="fname"
            value={formData.fname}
          />
        </div>
        <div className="flex flex-col mb-3 w-[48%]">
          <label htmlFor="lname">
            Last Name <sup className="text-red-500">*</sup>
          </label>
          <input
            onInput={changeHandler}
            required
            className="px-2 py-2 rounded-lg text-lg bg-[#161d29] mt-1 border-b border-gray-600"
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <label htmlFor="email">
        Email Address <sup className="text-red-500">*</sup>
      </label>
      <input
        onInput={changeHandler}
        className="px-2 py-2 rounded-lg text-lg bg-[#161d29] mt-1 border-b border-gray-600"
        placeholder="Enter email address"
        name="email"
        value={FormData.email}
      />
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label className="mt-3" htmlFor="pass">
            Create Password <sup className="text-red-500">*</sup>
          </label>
          <PasswordInput setFormData={setFormData} passType={'confPass'}/>
        </div>
        <div className="flex flex-col w-[48%]">
          <label className="mt-3" htmlFor="confPass">
            Confirm Password <sup className="text-red-500">*</sup>
          </label>
          <PasswordInput setFormData={setFormData} passType= {'pass'}/>
        </div>
      </div>

      <button
        type="submit"
        className="mt-14 w-full bg-[#ffd60a] text-black text-md rounded-lg py-2 font-semibold"
      >
        Create Account
      </button>
    </form>
  );
}
