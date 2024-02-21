import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputField from './InputField';
function AddEmployee(props) {
    const { visibility, setVisibility } = props.visibility
    const fieldButton = ['Joining', 'salary', 'Overview']
    const [active, setActive] = useState([true, false, false])
    const activeHandeler = (i) => {
        const newActive = [...active];
        for (let index = 0; index < active.length; index++) {
            newActive[index] = (index === i);
        }
        setActive(newActive);
    }

    const field1 = [{ name: 'first name', type: 'text', imp: true }, { name: 'middle name', type: 'text', imp: false }, { name: 'last name', type: 'text', imp: true }, { name: 'd o b', type: 'date', imp: true }, { name: 'gender', type: 'select', imp: true, options: ['male', 'female', 'others'] }, { name: 'postal code', type: 'number', imp: true }, { name: 'address', type: 'text', imp: true }, { name: 'emailId', type: 'email', imp: false }, { name: 'whatsapp no.', type: 'number', imp: true }, { name: 'addhar', type: 'file', imp: false,accept:'pdf'  }, { name: 'p a n', type: 'file', imp: false,accept:'pdf'  }]

    const field2 = [{ name: 'date of joining', type: 'date', imp: true }, { name: 'branch ', type: 'text', imp: false }, { name: 'department', type:'select',options:['select'], imp: true }, { name: 'designation', type: 'text', imp: true }, { name: 'reports to', type: 'select', imp: true, options: ['select'] }, { name: 'default shift', type: 'number', imp: true }, { name: 'geo-fence', type: 'text', imp: true }, { name: 'status', type: 'text', imp: false }, { name: 'profile picture', type: 'file', imp: false,accept:'images' }]

    const field3 = [{ name: 'salary structure', type: 'text', imp: true }, { name: 'salary mode', type: 'text', imp: true }, { name: 'branch name', type: 'text', imp: true, }, { name: 'account no.', type: 'text', imp: true }, { name: 'IFSC code', type: 'text', imp: true, options: ['select'] }, { name: 'IMCR code', type: 'number', imp: true }, { name: 'PF UAN', type: 'text', imp: true }, { name: 'ESIC NO.', type: 'email', imp: true }, { name: 'PF ACCOUNT no.', type: 'number', imp: true }]

    const fields = [field1, field2, field3]

    const setXAxis = (index) => {
        let elem = document.querySelector('.elems')
        let width = elem.clientWidth * index
        setTranslatex(-1 * width)
    }
    const [translatex, setTranslatex] = useState(0)
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
                                        setXAxis(index)
                                    }}>{item}</button>
                                })
                            }
                        </header>

                        <div className={`w-full h-full bg-zinc-700 p-3`}>
                            <div className=" transition-all duration-300 whitespace-nowrap" style={{ transform: `translateX(${translatex}px)` }}>
                                {fields.map((field) => (
                                    <div className={`inline-block w-full elems`}>
                                        <div className={`w-full p-4 grid-cols-2 grid gap-y-3 gap-x-5 pb-16`}>
                                            {
                                                field.map((items) => (
                                                    <div className="" >
                                                        <InputField params={items} key={items.name}/>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))}
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