import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import AddForm from './AddForm';
import Table from './Table';
function Shift() {
  const [visibility, setVisibility] = useState('none')
  return (
    <>
      <header className='flex justify-between items-center'>
        <h1 className=' capitalize font-bold text-3xl'>Shift details</h1>
        <div className="flex gap-3">
          <div className="relative">
            <label htmlFor="" className=' absolute -top-0 -translate-x-1/2 left-1/2 -translate-y-1/2 capitalize tracking-tight text-xs bg-zinc-700 px-2'>status</label>
            <select name="" id="" className='border-blue-600 bg-transparent border-2 rounded-md text-lg px-3 py-1 flex items-center gap-1 outline-none'>
              <option value="" className=' bg-zinc-600'>All</option>
              <option value="" className=' bg-zinc-600'>Day</option>
              <option value="" className=' bg-zinc-600'>Night</option>
            </select>
          </div>
          <button to='/employee/add-emp' className='bg-blue-600 rounded-md text-lg px-3 py-1 flex items-center gap-1' onClick={() => { setVisibility('block') }}>Add New <IoIosArrowDown className='text-xl' /></button>
        </div>
      </header>
      {visibility && <AddForm visibility={{ visibility, setVisibility }} />}

      <div className="mt-3">
        <Table />
      </div>

    </>
  )
}

export default Shift