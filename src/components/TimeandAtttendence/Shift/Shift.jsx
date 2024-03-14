import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import AddForm from './AddForm';
import Table from '../../Table';
import { useEmpData } from '../../../context';
function Shift() {
  const [visibility, setVisibility] = useState('none')
  const columns = [

    {
      field: 'shiftName',
      headerName: 'SHIFT NAME',
      width: 150,
    },
    {
      field: 'startTime',
      headerName: 'START TIME',
      width: 150,
      editable: true,
    },
    {
      field: 'endTime',
      headerName: 'END TIME',
      width: 150,
    },
    {
      field: 'entryGP',
      headerName: 'GRACE ENTRY PERIOD',
      width: 200,
    },
    {
      field: 'exitGP',
      headerName: 'GRACE EXIT PERIOD',
      width: 200,
    },
    {
      field: 'empCount',
      headerName: 'EMP COUNT',
      type: 'number',
      width: 110,
    },
  ];
  const { shiftTableData } = useEmpData()
  console.log(shiftTableData);
  const rows = shiftTableData
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
      {visibility && <AddForm visibility={{ visibility, setVisibility }} style={{ width: '30%', col: 1 }} />}

      <div className="mt-3">
        <Table columns={columns} rows={rows} />
      </div>

    </>
  )
}

export default Shift