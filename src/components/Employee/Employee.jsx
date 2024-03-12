import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import Navbar2 from '../Navbar2'
import AddEmployee from './AddForm';
import Table from './Table'
function Employee() {
    const [visibility, setVisibility] = useState('none')
    return (
        <>
            <Navbar2 name={['Add Employee']} to={['/employee']} />
            
            <div className='h-full w-full gap-5 pt-2 dark:text-zinc-200 relative'>
                <header className='flex justify-between items-center'>
                    <div className="flex gap-3">
                        <select name="" id="" className='bg-zinc-700 rounded-lg pr-3 p-1'>
                            <option value="">Select</option>
                        </select>
                        <select name="" id="" className='bg-zinc-700 rounded-lg pr-3 p-1'>
                            <option value="">Select</option>
                        </select>
                        <select name="" id="" className='bg-zinc-700 rounded-lg pr-3 p-1'>
                            <option value="">Select</option>
                        </select>
                        <button className="bg-zinc-700 rounded-md items-center justify-between gap-4 flex text-lg  px-3 py-1">More<CiCirclePlus /></button>
                        <button className="bg-red-200 rounded-md border border-red-600 text-lg text-red-600 px-3 py-1">Reset</button>
                    </div>
                    <button to='/employee/add-emp' className='bg-blue-600 rounded-md text-lg px-3 py-1 flex items-center gap-1' onClick={() => { setVisibility('block') }}>Add New <IoIosArrowDown className='text-xl' /></button>
                </header>

                <div className="w-full px-3 my-8 text-gray-100">
                    <Table/>
                </div>

                {visibility && <AddEmployee visibility={{ visibility, setVisibility }} />}
            </div>
        </>
    )
}

export default Employee