import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login To
					<span className='text-yellow-500'> Talk-It-Out </span>
				</h1>


        <form>
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
          <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </a>

          <div>
            {/* <button className='btn btn-block btn-sm mt-2 bg-blue-500 text-black'>Login</button> */}
            <button type='submit' className='btn btn-block btn-sm mt-2 bg-sky-500 text-white'>
            Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

