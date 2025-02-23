import React from 'react'
import MenuBar from '../Components/MenuBar'

const ProfilePage = () => {
  return (
    <>
        <MenuBar/>
      <div className='w-[100%] h-screen space-y-5 
      md:flex md:flex-row md:gap-5 md:space-y-0 p-5   md:w-[95%] mx-auto md:justify-center'>

          <div className='md:w-[50%] h-auto border rounded-[10px] border-black drop-shadow-md hover:shadow-2xl shadow-black
          '>
            <div className='w-[100%] p-5 h-14 bg-[#376a63] text-center rounded-[10px] flex items-center text-white
             md:text-[20px] text-[17px] font-semibold'>
              <h2 className=''>Announcements</h2>
            </div>

            <div  className='w-[100%] p-5'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, enim.</p>
            </div>
          </div>

          <div className='md:w-[25%] h-auto rounded-[10px] border border-black drop-shadow-md hover:shadow-2xl shadow-black
          '>

            <div className='w-[100%] p-5 h-14 bg-[#376a63] rounded-[10px] flex items-center text-white
             md:text-[20px] text-[17px] font-semibold '>
              <h2>Transactions</h2>
            </div>
            <div className='p-5 border-b flex justify-between '>
              <div>
              <p>Barangay Clearance</p>
              <p className='text-[13px]'>12 March 10:00PM</p>
              </div>
              <div className='flex items-center'>
              <p className='text-[13px] font-bold uppercase rounded p-1 text-red-400'>pending</p>
              </div>
            </div>
            <div className='p-5 border-b flex justify-between '>
              <div>
              <p>Barangay Clearance</p>
              <p className='text-[13px]'>12 March 10:00PM</p>
              </div>
              <div className='flex items-center'>
              <p className='text-[13px] uppercase font-bold rounded p-1 text-green-400'>claimable</p>
              </div>
            </div>
          </div>

          <div className='md:w-[25%] h-auto  rounded-[10px] border border-black drop-shadow-md hover:shadow-2xl shadow-black
          '>
           <div className='w-[100%] p-5 h-14 bg-[#376a63] rounded-[10px] flex items-center text-white
             md:text-[20px] text-[17px] font-semibold'>
              <h2>Profile Information</h2>
            </div>

            <div className='w-[100%] p-5 space-y-5 '>
              <div>
              <p className='text-gray-700'>Full Name:</p>
              <p>Juan Dela Cruz</p>
              </div>
              <div><p className='text-gray-700'>Mobile #:</p>
              <p>0905-555-6585</p>
              </div>
              <div><p className='text-gray-700'>Email:</p>
              <p>@email.com</p>
              </div>
              <div><p className='text-gray-700'>Address:</p>
              <p>Purok-2</p>
              </div>
            </div>

          </div>
      </div>
    </>
  )
}

export default ProfilePage
