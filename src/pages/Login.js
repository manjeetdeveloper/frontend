import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


export const Login = () => {
    const [showPassword,setShowPasswoed] = useState(false)
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-4 w-full max-w-md mx-auto rounded">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>
        
          <form>
            <div className="grid">
              <lable>Email : </lable>
              <div className="bg-slate-100 p-2">
                <input type="email" placeholder="enter email"  className = "w-full h-full outline-none bg-transparent"/>
              </div>
            </div>

            <div>
              <lable>Password : </lable>
              <div className="bg-slate-100 p-2 flex">
                <input type={showPassword ? "text" : "password"} placeholder="enter password" className = "w-full h-full outline-none bg-transparent " />
                    <div className=" cursor-pointer text-xl " onClick={()=>setShowPasswoed((preve)=>!preve)}>
                        <span>
                            {
                                showPassword ? (
                                    <FaEyeSlash/>
                                )
                                :
                                (
                                    <FaEye/>
                                )
                            }
                        </span>
                    </div>
              </div>
            </div>

            <button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
