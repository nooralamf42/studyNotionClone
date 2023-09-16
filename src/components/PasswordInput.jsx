import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useState } from "react";

export default function PasswordInput({setFormData, setPass}) {

    let [isClicked, setIsClicked] = useState(false);

    function clickHandler(){
        setIsClicked(isClicked?false: true);
    }

    function changeHandler(e){
      setFormData((pre)=>{
        return {
          ...pre,
          ["pass"]: e.target.value
        }
      })
    }

  return <div className="relative" id="confPass">
            <input
              onInput={setPass ? changeHandler: null}
              required
              className="px-2 py-2 rounded-lg text-lg bg-[#161d29] mt-1 border-b border-gray-600 w-full pr-10"
              type={isClicked?'text': "password"}
              placeholder="Confirm password"
            />
          {
            !isClicked?
            <AiOutlineEye
            onClick={clickHandler}
            className="absolute bottom-3 right-3 hover:cursor-pointer"
            size={22}
            />
            :
            <AiOutlineEyeInvisible
            onClick={clickHandler}
            className="absolute bottom-3 right-3 hover:cursor-pointer"
            size={22}
            />
          }
          </div>

}
