import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"
import { userAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

function Signup() {
        const [authUser, setAuthUser] = userAuth();
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const password = watch('Password', "");
        const verifyPass = watch('VerifyPass', "");
        const ValidatePasswordMatch=(value)=>{
            return value === password || "Your Passwords are not same"
        } 
        const onSubmit = async(data) =>{
            const userInfo ={
            fullname : data.fullname,
            Email : data.Email,
            Password : data.Password,
            VerifyPass : data.VerifyPass
            }
            await axios
            .post('/api/user/signup',userInfo)
            .then((res)=>{
                console.log(res.data);
                if(res.data){
                    alert("Login Succefully");
                }
                localStorage.setItem("message", JSON.stringify(res.data));
                setAuthUser(res.data);
            })
            .catch((error)=>{
                console.log(error);
                if(error.response){
                    alert("Error:"+ error.response.data.message);
                }else {
                    console.error("Unexpected Error: ", error);
                    alert("An unexpected error occurred");
                }
            })
        } 
      
    return (
        <>
            <div className='flex justify-center h-[100vh] items-center'>
                <form className=' flex flex-col gap-y-4' onSubmit={handleSubmit(onSubmit)}>

                {/* UserName */}
                <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Username" 
                        {...register("fullname",{required : true})}/>
                    </label>
                    {errors.fullname && <span className='caret-red-800 font-semibold'>**This field is required</span>}

                {/* Email */}

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email"  
                        {...register("Email" ,{required : true})}/>
                    </label>
                    {errors.Email && <span className='caret-red-800 font-semibold'>**This field is required</span>}
                    

                    {/* Passwordzz */}
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="Password" className="grow" placeholder='Password'
                        {...register("Password",{required : true})}/>
                    </label>
                    {errors.Password && <span className='caret-red-800 font-semibold'>**This field is required</span>}


                    {/* VerifyPass */}
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="VerifyPass" className="grow" placeholder='Confirm Password'
                        {...register("VerifyPass" ,{
                        required : true ,
                        validate:ValidatePasswordMatch})} />
                    </label>
                    {errors.VerifyPass && <span className='caret-red-800 font-semibold'>**{errors.VerifyPass.message}</span>}



                    <div className='flex justify-center items-center bg-lime-800 rounded-lg'>
                <button className=' w-[100%]' type='submit'>Sign Up</button>
                </div>
                </form>
                <Link to={'/Login'}>
                <span>Log In</span></Link>
            </div>
        </>
    )
}

export default Signup;