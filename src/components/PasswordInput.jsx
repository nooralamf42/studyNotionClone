import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useState } from "react";

export default function PasswordInput() {
    let [isClicked, setIsClicked] = useState(false);
    function clickHandler(){
        setIsClicked(isClicked?false: true);
    }
  return <div className="relative" id="confPass">
            <input
              required
              className="px-2 py-2 rounded-lg text-lg bg-[#161d29] mt-1 border-b border-gray-600 w-full"
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
