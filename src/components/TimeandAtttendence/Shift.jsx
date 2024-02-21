import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import AddEmployee from './AddForm';
function Shift() {
  const [visibility, setVisibility] = useState('none')
  const fieldButton = ['new', 'others']
  const [active, setActive] = useState([true, false])
  const activeHandeler = (i) => {
    const newActive = [...active];
    for (let index = 0; index < active.length; index++) {
      newActive[index] = (index === i);
    }
    setActive(newActive);
    setFields(allFields[i]);
  }
  const gap = 3;
  const title = 'Add new shift'
  const field1 = [{ name: 'shift name', type: 'text', imp: true }, { name: 'start time', type: 'time', imp: true }, { name: 'end time', type: 'time', imp: true }, { name: 'total shift duration', type: 'time' }, { name: 'threshhold for half day', type: 'time' }, { name: 'min. hour for full day', type: 'time' }]

  const field2 = [{ name: 'entry grace period', type: 'time' }, { name: 'exit grace period', type: 'time' }, { name: 'check in before shift start time', type: 'time' }, { name: 'check in after shift end time', type: 'time' }]


  const allFields = [field1, field2]
  const [fields, setFields] = useState(allFields[0])
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
      <table className='w-full bg-zinc-600 mt-5 rounded-lg text-left p-6 overflow-hidden'>
        <thead className='rounded-lg bg-zinc-900 font-light'>
          <tr className='uppercase '>
            <th className='p-3 font-light'>Shift name</th>
            <th className='p-3 font-light'>start time</th>
            <th className='p-3 font-light'>end time</th>
            <th className='p-3 font-light'>grace entry period</th>
            <th className='p-3 font-light'>grace exit period</th>
            <th className='p-3 font-light'>status</th>
            <th className='p-3 font-light'>Employe count</th>
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

export default Shift