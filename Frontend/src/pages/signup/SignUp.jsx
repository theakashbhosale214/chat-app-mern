import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3x1 font-semibold text-center text-gray-300'>
          Sign Up To
          {/* <span className='text-blue-500'>Talk-It-Out</span> */}
					<span className='text-yellow-500'> Talk-It-Out </span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10 bg-yellow-500 text-black placeholder-black'/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10 bg-yellow-500 text-black placeholder-black'/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='text' placeholder='Password' className='w-full input input-bordered h-10 bg-yellow-500 text-black placeholder-black'/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='text' placeholder='Enter Confirm Password' className='w-full input input-bordered h-10 bg-yellow-500 text-black placeholder-black'/>
          </div>

          <GenderCheckbox/>

          <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-1 inline-block'>
            Already have an account?
          </a>

          <div>
            {/* <button className='btn btn-block btn-sm mt-2 bg-blue-500 text-black'>Sign Up</button> */}
            <button type='submit' className='btn btn-block btn-sm mt-2 bg-sky-500 text-white'>
            Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp


