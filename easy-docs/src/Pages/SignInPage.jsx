import React, { useState } from 'react';  // ✅ Import useState
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../Components/LoadingScreen';

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setLoading(true); // ✅ Show loading screen
    setTimeout(() => {
      setLoading(false);
      navigate("/profile"); // ✅ Redirect after loading
    }, 1000);
  };

  return (
    <>
      {loading && <LoadingScreen />} {/* ✅ Loading screen overlay when loading */}
      
      <div className='flex w-[100%] h-screen items-center justify-center'>

        <div className='w-[50%] h-[100%] hidden md:block'></div>

        <div className='md:w-[50%] w-[100%] h-[100%] md:px-0 px-9'>
          <div className='md:pr-28 md:left-0'>
            <div className=''>
              <div className='flex flex-col md:items-center mt-11 md:mt-20 px-[15px] gap-3 md:gap-8'>
                <h3 className='text-[30px] font-extrabold'>Nice to see you!</h3>
                <p>Please enter your ID number and password to sign in.</p>
              </div>

              <div className='space-y-4 md:items-center flex flex-col'>
                <div className='mt-10'>
                  <p>Email</p>
                  <input type="email" required placeholder='sample@email.com'
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className='w-[95%] md:w-[300px] border text-[12px] border-black rounded-[15px] p-2 focus:outline-none focus:ring-2 focus:ring-[blue-500]' />
                </div>

                <div className='flex flex-col'>
                  <p>Password</p>
                  <input type="password" required placeholder='input password...'
                    className='w-[95%] md:w-[300px] mb-5 border text-[12px] border-black rounded-[15px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                {/* ✅ Button triggers handleSignIn instead of <Link> */}
                <button 
                  onClick={handleSignIn} 
                  className='md:w-[300px] w-[95%] h-[35px] bg-black rounded-full text-center items-center flex justify-center font-extrabold text-white'
                  disabled={loading} // Prevent multiple clicks
                >
                  {loading ? "Signing In..." : "SIGN IN"}
                </button>

                <div className='inline-flex space-x-1 justify-center'>
                  <p>Don't have an account?</p>
                  <button className='font-bold ' onClick={() => navigate("/signUp")}>Sign up</button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default SignInPage;
