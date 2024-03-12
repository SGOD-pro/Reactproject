import React,{useState} from 'react'
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
function Holiday() {
  return (
    <>
      <header className='flex justify-between items-center'>
        <h1 className=' capitalize font-bold text-3xl'>holiday details</h1>
        <div className="flex gap-3">
          <div className="relative">
            <label htmlFor="" className=' absolute -top-0 -translate-x-1/2 left-1/2 -translate-y-1/2 capitalize tracking-tight text-xs bg-zinc-700 px-2'>year</label>
            <select name="" id="" className='border-blue-600 bg-transparent border-2 rounded-md text-lg px-3 py-1 flex items-center gap-1 outline-none'>
              <option value=""  className=' bg-zinc-600'>2024</option>
              <option value=""  className=' bg-zinc-600'>2025</option>
              <option value="" className=' bg-zinc-600'>2026</option>
            </select>
          </div>
          <div className="relative">
            <label htmlFor="" className=' absolute -top-0 -translate-x-1/2 left-1/2 -translate-y-1/2 capitalize tracking-tight text-xs bg-zinc-700 px-2'>status</label>
            <select name="" id="" className='border-blue-600 bg-transparent border-2 rounded-md text-lg px-3 py-1 flex items-center gap-1 outline-none'>
              <option value="" className=' bg-zinc-600'>All</option>
              <option value="" className=' bg-zinc-600'>Day</option>
              <option value="" className=' bg-zinc-600'>Night</option>
            </select>
          </div>
          <button to='/employee/add-emp' className='bg-blue-600 rounded-md text-lg px-3 py-1 flex items-center gap-1' onClick={() => { setVisibility('block') }}>Add Holiday <IoIosArrowDown className='text-xl' /></button>
        </div>
      </header>
      <table className='w-full bg-zinc-600 mt-5 rounded-lg text-left p-6 overflow-hidden'>
        <thead className='rounded-lg bg-zinc-900 font-light'>
          <tr className='uppercase '>
            <th className='p-3 font-light'>holiday name</th>
            <th className='p-3 font-light'>date</th>
            <th className='p-3 font-light'>time</th>
            <th className='p-3 font-light'>department</th>
            <th className='p-3 font-light'>designation</th>
            <th className='p-3 font-light'>day</th>
            <th className='p-3 font-light'>action</th>
          </tr>
        </thead>
        <tbody className='font-light'>
          <tr className='uppercase '>
            <td className='p-3'>day</td>
            <td className='p-3'>10:00:00 <span>am</span></td>
            <td className='p-3'>07:00:00 <span>pm</span></td>
            <td className='p-3'>30 <span>mins</span></td>
            <td className='p-3'>60 <span>mins</span></td>
            <td className='p-3'>active</td>
            <td className='p-3'>5</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Holiday