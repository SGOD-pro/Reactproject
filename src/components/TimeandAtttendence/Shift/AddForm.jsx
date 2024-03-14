import React, { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputField from './InputField';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEmpData } from '../../../context'
function AddForm(props) {

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
    const [time1, settime1] = useState('')
    const [time2, settime2] = useState('')
    function differenceTime(time1, time2) {
        const [hours1, minutes1] = time1.split(':').map(Number);
        const [hours2, minutes2] = time2.split(':').map(Number);

        let diffHours = hours2 - hours1;
        let diffMinutes = minutes2 - minutes1;

        if (diffHours < 0 || (diffHours === 0 && diffMinutes < 0)) {
            diffHours += 24;
        }

        if (diffMinutes < 0) {
            diffHours--;
            diffMinutes += 60;
        }

        return { diffHours, diffMinutes };
    }
    const handleChange1 = (e) => {
        const { name, value, type, files } = e.target;

        if (name === "startTime") {
            settime1(value)
        }
        if (name === "endTime") {
            settime2(value)
        }

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

    const toastObj = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }
    useEffect(() => {
        if (time1 !== "" && time2 !== "") {
            let time = differenceTime(time1, time2)
            document.getElementById("TSD").innerHTML = `${time.diffHours}:${time.diffMinutes}`
            if (time.diffHours < 0) {
                toast.warn('Please Select a valid time', toastObj);
                setDisabledBtn(true)
                return;
            }
            setDisabledBtn(false)
            setFormData1(prevState => ({
                ...prevState,
                TSD: `${time.diffHours}:${time.diffMinutes}`
            }));
        }
    }, [time1, time2])


    const [field1, setField1] = useState([
        { name: 'shiftName', type: 'select', options: ["Morning", "Evening", "Night"], imp: true, field: 'shift name', placeHolder: "", eventChange: handleChange1 },
        { name: 'startTime', type: 'time', imp: true, field: 'start time', placeHolder: "", eventChange: handleChange1 },
        { name: 'endTime', type: 'time', imp: true, field: 'end time', placeHolder: "", eventChange: handleChange1 },
        { name: 'TSD', type: 'time', field: 'total shift duration', placeHolder: "", readOnly: true },
        { name: 'threshhold_HalfDay', type: 'number', field: 'threshold for half day', placeHolder: "", eventChange: handleChange1 },
        { name: 'minHour_FullDay', type: 'number', field: 'min. hour for full day', placeHolder: "", eventChange: handleChange1 }
    ]);

    const [field2, setField2] = useState([
        { name: 'entryGP', type: 'number', field: 'entry GP', placeHolder: "", imp: false, eventChange: handleChange2 },
        { name: 'exitGP', type: 'number', field: 'exit GP', placeHolder: "", imp: false, eventChange: handleChange2 },
        { name: 'checkInBefore', type: 'number', field: 'check in before shift start time', placeHolder: "", extra: "", imp: false, eventChange: handleChange2 },
        { name: 'checkInAfter', type: 'number', field: 'check in after shift end time', placeHolder: "", extra: "", imp: false, eventChange: handleChange2 }
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

    const { pushShiftTableData } = useEmpData()

    const onSubmit = (e) => {
        e.preventDefault();
        const data = { ...formData1, ...formData2 }
        console.log(data);
        if (!formData1.shiftName && formData1.shiftName === "") {
            toast.warn("Shift Name required.", toastObj)
            return;
        }
        axios.post("/api/timeAtt/setShift", data).then(response => {
            const responseData = response.data
            console.log(responseData);
            if (!responseData.success) {
                toast.error("Couldn't save", toastObj)
            }
            pushShiftTableData(responseData.data)
        }).catch(err => { toast.error("Some internal error occurs", toastObj) })
        setFormData1({
            shiftName: '',
            startTime: '',
            endTime: '',
            TSD: '',
            threshhold_HalfDay: "",
            minHour_FullDay: "",
        })
        setFormData2({
            entryGP: '',
            exitGP: '',
            checkInBefore: '',
            checkInAfter: ''
        })
        document.getElementById("TSD").innerHTML = ""
    };



    const showData = () => {
        console.log(formData1);
        console.log(formData2);
    }




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
                            <form className=" whitespace-nowrap h-full" onSubmit={onSubmit}>
                                {fields.map((field, index) => (
                                    <div className={` transition-all duration-300 inline-block w-full elems h-full relative`} key={index} style={{ transform: `translateX(${translatex}px)` }}>
                                        <div className={`w-full p-4 grid-cols-1 grid gap-y-3 gap-x-5 pb-16`} >
                                            {
                                                field.map((items) => (
                                                    <InputField params={items} key={items.name} formData={formData[index]} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))}
                                <footer className="absolute bottom-0 left-0 w-full bg-zinc-900 flex items-center justify-between py-2 px-2 text-blue-600">
                                    <h2 className='font-mono text-xl' onClick={showData}>Add new employee</h2>
                                    <div className="flex gap-2">
                                        <button type='reset' className={`rounded-md border-2 border-blue-600 px-3 py-1 ${(disabledBtn) && " cursor-not-allowed"}`} disabled={(disabledBtn)}>Reset</button>
                                        <button type='submit' className={`rounded-md text-zinc-900 font-semibold bg-blue-600 px-3 py-1 ${(disabledBtn) && " cursor-not-allowed"}`} disabled={(disabledBtn)}>Submit</button>
                                    </div>
                                </footer>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddForm