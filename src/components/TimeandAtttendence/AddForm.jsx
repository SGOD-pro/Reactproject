import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
//import InputField from '../Employee/InputField';
function AddEmployee(props) {
    const { visibility, setVisibility } = props.visiblity
    const { fieldButton, active, activeHandeler, fields, title, gap } = props
    return (
        <>
            <div className=" absolute top-0 left-0 w-full h-full rounded-lg flex items-center justify-center px-2 bg-[#7474740c]" style={{ display: visibility }}>
                <div className="w-[99.1%] h-full rounded-lg backdrop-blur-[2px] flex items-center justify-center bg-[#3f3f3f3f] py-2">
                    <form action="" className='z-0 relative min-w-[414px] w-1/2 h-full rounded-lg bg-zinc-900 text-white flex flex-col overflow-hidden' onSubmit={(e) => { e.preventDefault() }}>
                        <header className='pt-4 pl-12 flex gap-1'>
                            <div className='absolute right-0 top-0 p-1 text-2xl cursor-pointer' onClick={() => { setVisibility('none') }}>
                                <IoIosCloseCircleOutline />
                            </div>

                            {
                                fieldButton.map((item, index) => {
                                    return <button type='button' key={item} className={`${active[index] && 'bg-zinc-700'} border-2 border-zinc-700 capitalize px-3 py-1 rounded-md rounded-b-none border-b-0 fieldButtonActive`} onClick={() => {
                                        activeHandeler(index)
                                    }}>{item}</button>
                                })
                            }
                        </header>
                        <div className={`w-full h-full bg-zinc-700 p-3 `}>
                            <div className={`w-full p-4 grid-cols-2 grid gap-y2 gap-x-3 pb-16`}>
                                {/* {
                                    fields.map((items, index) => (
                                        <InputField params={items} key={index} />
                                    ))
                                } */}
                            </div>
                        </div>
                        <footer className="absolute bottom-0 w-full bg-zinc-900 flex items-center justify-between py-1 px-2 text-blue-600">
                            <h2 className='font-mono text-xl'>Add new employee</h2>
                            <div className="flex gap-2">
                                <button type='reset' className="rounded-md border-2 border-blue-600 px-3 py-1">Reset</button>
                                <button type='submit' className="rounded-md text-zinc-900 font-semibold bg-blue-600 px-3 py-1">Submit</button>
                            </div>
                        </footer>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddEmployee