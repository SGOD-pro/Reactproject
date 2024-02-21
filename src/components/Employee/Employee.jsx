import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import Navbar2 from '../Navbar2'
import AddEmployee from './AddForm';
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
                <table className='w-full bg-zinc-600 mt-5 rounded-lg text-left p-6 overflow-hidden'>
                    <thead className='rounded-lg bg-zinc-900'>
                        <tr className='uppercase'>
                            <th className='p-3 font-light'>Id</th>
                            <th className='p-3 font-light'>name</th>
                            <th className='p-3 font-light'>dept</th>
                            <th className='p-3 font-light'>deg</th>
                            <th className='p-3 font-light'>gender</th>
                            <th className='p-3 font-light'>status</th>
                            <th className='p-3 font-light'>doj</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr>
                            <td className='p-3'>EMP/34232</td>
                            <td className='p-3'>Java</td>
                            <td className='p-3'>Programming</td>
                            <td className='p-3 uppercase'>ADMIN</td>
                            <td className='p-3 uppercase'>MALE</td>
                            <td className='p-3 uppercase'>ACTIVE</td>
                            <td className='p-3'>01-01-2024</td>
                        </tr>
                        <tr>
                            <td className='p-3'>EMP/34232</td>
                            <td className='p-3'>Java</td>
                            <td className='p-3'>Programming</td>
                            <td className='p-3'>ADMIN</td>
                            <td className='p-3'>MALE</td>
                            <td className='p-3'>ACTIVE</td>
                            <td className='p-3'>01-01-2024</td>
                        </tr>
                        <tr>
                            <td className='p-3'>EMP/34232</td>
                            <td className='p-3'>Java</td>
                            <td className='p-3'>Programming</td>
                            <td className='p-3'>ADMIN</td>
                            <td className='p-3'>MALE</td>
                            <td className='p-3'>ACTIVE</td>
                            <td className='p-3'>01-01-2024</td>
                        </tr>
                        <tr>
                            <td className='p-3'>EMP/34232</td>
                            <td className='p-3'>Java</td>
                            <td className='p-3'>Programming</td>
                            <td className='p-3'>ADMIN</td>
                            <td className='p-3'>MALE</td>
                            <td className='p-3'>ACTIVE</td>
                            <td className='p-3'>01-01-2024</td>
                        </tr>
                        <tr>
                            <td className='p-3'>EMP/34232</td>
                            <td className='p-3'>Java</td>
                            <td className='p-3'>Programming</td>
                            <td className='p-3'>ADMIN</td>
                            <td className='p-3'>MALE</td>
                            <td className='p-3'>ACTIVE</td>
                            <td className='p-3'>01-01-2024</td>
                        </tr>
                        <tr>
                            <td className='p-3'>EMP/34232</td>
                            <td className='p-3'>Java</td>
                            <td className='p-3'>Programming</td>
                            <td className='p-3'>ADMIN</td>
                            <td className='p-3'>MALE</td>
                            <td className='p-3'>ACTIVE</td>
                            <td className='p-3'>01-01-2024</td>
                        </tr>
                        <tr>
                            <td className='p-3'>EMP/34232</td>
                            <td className='p-3'>Java</td>
                            <td className='p-3'>Programming</td>
                            <td className='p-3'>ADMIN</td>
                            <td className='p-3'>MALE</td>
                            <td className='p-3'>ACTIVE</td>
                            <td className='p-3'>01-01-2024</td>
                        </tr>
                        <tr>
                            <td className='p-3'>EMP/34232</td>
                            <td className='p-3'>Java</td>
                            <td className='p-3'>Programming</td>
                            <td className='p-3'>ADMIN</td>
                            <td className='p-3'>MALE</td>
                            <td className='p-3'>ACTIVE</td>
                            <td className='p-3'>01-01-2024</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex items-center justify-between mt-2 px-4">

                    <div className="flex gap-5 ">
                        <div className="flex gap-2 ">
                            <label htmlFor="page">Row per Page</label>
                            <select name="page" id="page" className='bg-blue-200 px-3 rounded-lg text-zinc-800'>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>
                        <div className="flex gap-2 ">
                            <p>Showing page no. <strong>1</strong>-<strong>25</strong> of <strong>25 </strong>entries</p>
                        </div>
                    </div>
                    <div className="flex items-center text-3xl rounded-lg overflow-hidden text-blue-500 bg-blue-200 justify-between gap-2">
                        <button className={`p-1 text-center`}><IoIosArrowDropleft /></button>
                        <p className='text-2xl px-3 border-l border-r border-blue-600'>1</p>
                        <button className={`p-1 text-center`}><IoIosArrowDropright /></button>
                    </div>
                </div>
                {visibility && <AddEmployee visibility={{ visibility, setVisibility }} />}
            </div>
        </>
    )
}

export default Employee