import React, { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputField from './InputField';
import axios from 'axios';
import { useAlert, useEmpData } from '../../../context'
function AddForm(props) {
    const { setAlert } = useAlert()
    const [disabledBtn, setDisabledBtn] = useState(false)
    const { visibility, setVisibility } = props.visibility
    const fieldButton = ["new", "other"]

    const [active, setActive] = useState([true, false])

    const activeHandeler = (i) => {
        const newActive = [...active];
        for (let index = 0; index < active.length; index++) {
            newActive[index] = (index === i);
        }
        setActive(newActive);
    }


    const handleChange1 = (e) => {
        const { name, value, type, files } = e.target;
        setFormData1(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }));
    };


    const handleChange2 = (e) => {
        const { name, value, type, files } = e.target;
        setFormData2(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }));
    };


    const [formData1, setFormData1] = useState({
        shiftName: '',
        startTime: '',
        endTime: '',
        TSD: '',
        threshhold_HalfDay: "",
        minHour_FullDay: "",
    });

    const [formData2, setFormData2] = useState({
        entryGP: '',
        exitGP: '',
        checkInBefore: '',
        checkInAfter: ''
    });
    const [field1, setField1] = useState([
        { name: 'shiftName', type: 'text', imp: true, field: 'shift name', placeHolder: "", eventChange: handleChange1 },
        { name: 'startTime', type: 'time', imp: true, field: 'start time', placeHolder: "", eventChange: handleChange1 },
        { name: 'endTime', type: 'time', imp: true, field: 'end time', placeHolder: "", eventChange: handleChange1 },
        { name: 'TSD', type: 'time', field: 'total shift duration', placeHolder: "", eventChange: handleChange1 },
        { name: 'threshhold_HalfDay', type: 'time', field: 'threshold for half day', placeHolder: "", eventChange: handleChange1 },
        { name: 'minHour_FullDay', type: 'time', field: 'min. hour for full day', placeHolder: "", eventChange: handleChange1 }
    ]);

    const [field2, setField2] = useState([
        { name: 'entryGP', type: 'time', field: 'entry GP', placeHolder: "", imp: false, eventChange: handleChange2 },
        { name: 'exitGP', type: 'time', field: 'exit GP', placeHolder: "", imp: false, eventChange: handleChange2 },
        { name: 'checkInBefore', type: 'time', field: 'check in before shift start time', placeHolder: "", extra: "", imp: false, eventChange: handleChange2 },
        { name: 'checkInAfter', type: 'time', field: 'check in after shift end time', placeHolder: "", extra: "", imp: false, eventChange: handleChange2 }
    ]);

    const fields = [field1, field2]
    const formData = [formData1, formData2]
    const setXAxis = (index) => {
        let elem = document.querySelector('.elems')
        let width = elem.clientWidth * index
        setTranslatex(-1 * width)
    }
    const [translatex, setTranslatex] = useState(0)
    const [tableData, setTableData] = useState({})

    const onSubmit1 = (e) => {
        e.preventDefault();
        console.log('Field 1 Data:', formData1);
        setFormData1({
            shiftName: '',
            startTime: '',
            endTime: '',
            TSD: '',
            threshhold_HalfDay: "",
            minHour_FullDay: "",
        })
    };

    const onSubmit2 = (e) => {
        e.preventDefault();
        console.log('Field 2 Data:', formData2);
        setFormData2({
            entryGP: '',
            exitGP: '',
            checkInBefore: '',
            checkInAfter: ''
        })
    };



    const showData = () => {
        console.log(formData1);
        console.log(formData2);
    }
    const submitEvents = [onSubmit1, onSubmit2]




    return (
        <>
            <div className=" absolute top-0 left-0 w-full h-full rounded-lg flex items-center justify-center px-2 bg-[#7474740c] z-50" style={{ display: visibility }}>
                <div className="w-[99.1%] h-full rounded-lg backdrop-blur-[2px] flex items-center justify-center bg-[#3f3f3f3f] py-2">
                    <div action="" className='z-0 relative min-w-[450px] w-1/3 h-full rounded-lg bg-zinc-900 text-white flex flex-col overflow-hidden' onSubmit={(e) => { e.preventDefault() }}>
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

                        <div className={`w-full h-full bg-zinc-700`}>
                            <div className=" transition-all duration-300 whitespace-nowrap h-full" style={{ transform: `translateX(${translatex}px)` }}>
                                {fields.map((field, index) => (
                                    <form className={`inline-block w-full elems h-full relative`} key={index} onSubmit={submitEvents[index]} encType="multipart/form-data">
                                        <div className={`w-full p-4 grid-cols-1 grid gap-y-3 gap-x-5 pb-16`} >
                                            {
                                                field.map((items) => (
                                                    <InputField params={items} key={items.name} formData={formData[index]} />
                                                ))
                                            }
                                        </div>
                                        <footer className="absolute bottom-0 left-0 w-full bg-zinc-900 flex items-center justify-between py-2 px-2 text-blue-600">
                                            <h2 className='font-mono text-xl' onClick={showData}>Add new employee</h2>
                                            <div className="flex gap-2">
                                                <button type='reset' className={`rounded-md border-2 border-blue-600 px-3 py-1 ${(disabledBtn || field[0].readOnly) && " cursor-not-allowed"}`} disabled={(disabledBtn || field[0].readOnly)}>Reset</button>
                                                <button type='submit' className={`rounded-md text-zinc-900 font-semibold bg-blue-600 px-3 py-1 ${(disabledBtn || field[0].readOnly) && " cursor-not-allowed"}`} disabled={(disabledBtn || field[0].readOnly)}>Submit</button>
                                            </div>
                                        </footer>
                                    </form>

                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddForm