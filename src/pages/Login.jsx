import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../helpers/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isloading, setIsloading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e){
        setIsloading(true);
        e.preventDefault();
        if(email == "" || password == ""){
            toast.error("Please fill all the fields");
            setIsloading(false);
        }
        else {
            console.log(email, password);
            try {
                const {data ,error} = await login(email, password);
                console.log(data);
                setIsloading(false);
                navigate('/dashboard');

            }
            catch(e)
            {
                console.log(e.message);
                toast.error(e.message);
                setIsloading(false);
            }
        }
        setIsloading(false);
    }

    return (
        <div className="h-dvh w-full  bg-[#e7eef4] flex items-center justify-center m-auto">
                <Toaster/>
                <div className="bg-white rounded-xl sm:max-w-[380px] sm:max-h-[700px] h-[70%] w-[80%] m-4 ">
                    <h1 className="text-center font-bold text-2xl py-4 rounded-t-lg bg-[#2194F2] text-white">Admin Login</h1>
                    <h2 className="text-center font-bold text-xl mt-4">Login in to your account</h2>
                    <form>  
                        <div className="flex flex-col items-center  gap-4 mt-5">
                            <input className="border border-gray-300 bg-[#e7eef4]   w-[85%] rounded-lg p-2 " type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <input className="border border-gray-30 bg-[#e7eef4] w-[85%]  rounded-lg p-2 " type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <span className="text-[#2194F2] w-[85%] text-sm underline ">Forgot Password?</span>
                            <button type="submit" className=" bg-[#2194F2] text-white text-sm rounded-xl p-2 w-[85%] mt-3" onClick={handleSubmit} disabled={isloading} >{isloading ? "Loading..." : "Login"}</button>
                                <span>or</span>
                            <button type='button' onClick= {() => navigate('/')} className=" bg-[#2194F2] text-white text-sm rounded-xl p-2 w-[85%] mt-3 text-center"  disabled={isloading} >Go to Home</button>
                        </div>
                    </form>
                </div>

        </div>
    )
}


export default Login
