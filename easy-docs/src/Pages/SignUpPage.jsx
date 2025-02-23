import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SignUpPage = () => {

    const navigate = useNavigate();

    const handleSignUp = () =>{
        navigate ("/verification");
    }
    return (
        <>
            <div className='flex w-[100%] h-screen items-center justify-center    '>

                <div className='w-[50%] h-[100%] hidden md:block '>

                </div>


                <div className='md:w-[50%] w-[100%] h-[100%]  md:px-0 px-9'>
                    <div className=' '>
                        <div className=''>
                            <div className='flex flex-col items-center text-center md:items-center mt-11 md:mt-20  px-[15px] gap-3 md:gap-8'>
                                <h3 className='text-[30px] font-extrabold'>
                                    Welcome!
                                </h3>
                                <p className='font-semibold'>Please sign up to sign in.</p>
                            </div>



                            <div className='space-y-4 md:mx-28 border-black border rounded-[10px] flex flex-col items-center justify-center mt-11 md:mt-20'>
                               
                            <div className='mt-10 w-[85%] md:flex md:flex-col md:justify-center items-start'>
                                    <p className='font-semibold text-[15px] text-left md:pl-20'>ID Number</p>
                                    <input
                                        type="text"
                                        placeholder='2025-4609-0000'
                                        className='mx-auto w-[100%] md:w-[300px] border text-[12px] border-black rounded-[15px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                </div>

                                <div className='mt-10 w-[85%] md:flex md:flex-col md:justify-center items-start'>
                                    <p className='font-semibold text-[15px] text-left md:pl-20'>Email</p>
                                    <input
                                        type="email"
                                        placeholder='sample@email.com'
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        className='mx-auto w-[100%] md:w-[300px] border text-[12px] border-black rounded-[15px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                </div>
                               

                                <div className='mt-10 w-[85%] md:flex md:flex-col md:justify-center items-start '>
                                    <p className='font-semibold text-[15px] text-left md:pl-20'>Password</p>
                                    <input
                                        type="password"
                                        placeholder=''
                                        className='mx-auto w-[100%] md:w-[300px] border text-[12px] border-black md:mb-10 mb-8 rounded-[15px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                  
                                </div>

                                <div className='md:w-[300px] w-[85%] h-[35px] bg-black rounded-full text-center items-center flex justify-center font-extrabold'>
                                    <button  onClick={handleSignUp}
                                    className='text-white' type='submit'>SIGN UP</button>
                                </div>
                                <div className='inline-flex space-x-1 justify-center py-5'>
                                    <p>Already have an account?</p>
                                <Link to="/">
                                    <p className='font-bold'>Sign in</p>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default SignUpPage
