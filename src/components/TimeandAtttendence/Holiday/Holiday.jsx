import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import Table from "../../Table"
import { useEmpData } from '../../../context';
function Holiday() {

  const columns = [

    {
      field: '',
      headerName: 'holiday name',
      width: 150,
    },
    {
      field: '',
      headerName: 'date',
      width: 150,
      editable: true,
    },
    {
      field: '',
      headerName: 'TIME',
      width: 150,
    },
    {
      field: '',
      headerName: 'department',
      width: 200,
    },
    {
      field: '',
      headerName: 'designation',
      width: 200,
    },
    {
      field: '',
      headerName: 'day',
      type: 'number',
      width: 110,
    },
    {
      field: '',
      headerName: 'action',
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
        <h1 className=' capitalize font-bold text-3xl'>holiday details</h1>
        <div className="flex gap-3">
          <div className="relative">
            <label htmlFor="" className=' absolute -top-0 -translate-x-1/2 left-1/2 -translate-y-1/2 capitalize tracking-tight text-xs bg-zinc-700 px-2'>year</label>
            <select name="" id="" className='border-blue-600 bg-transparent border-2 rounded-md text-lg px-3 py-1 flex items-center gap-1 outline-none'>
              <option value="" className=' bg-zinc-600'>2024</option>
              <option value="" className=' bg-zinc-600'>2025</option>
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
      <div className="mt-3">
        <Table columns={columns} rows={rows} />
      </div>
    </>
  )
}

export default Holiday