import React from 'react'
import { TbMessageCircleSearch } from "react-icons/tb";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search_' className='input input-bordered rounded-full  bg-yellow-500 text-black placeholder-black' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <TbMessageCircleSearch className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput