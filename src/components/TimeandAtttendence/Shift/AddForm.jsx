import React, { useEffect, useState, useRef } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputField from './InputField';
import axios from 'axios';
import { toast } from 'react-toastify';
function AddForm(props) {

    const { width, col } = props.style
    const [disabledBtn, setDisabledBtn] = useState(false)
    const { visibility, setVisibility } = props.visibility
    const fieldButton = ['new', 'other']
    const [active, setActive] = useState([true, false, false])


    const toasterObj = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }

    const activeHandeler = (i) => {
        const newActive = [...active];
        for (let index = 0; index < active.length; index++) {
            newActive[index] = (index === i);
        }
        setActive(newActive);
        setFields(allFields[i])
    }


    const [formData, setFormData] = useState({
        shiftName: "",
        startTime: "",
        endTime: "",
        TSD: "",
        threshhold_HalfDay: "",
        minHour_FullDay: "",
        entryGP: "",
        exitGP: "",
        checkInBefore: "",
        checkInAfter: "",
    });

    const [field1, setField1] = useState([
        { name: 'shiftName', type: 'select', options: ["Morning", "Evening", "Night"], imp: true, field: 'shift name', placeHolder: "" },
        { name: 'startTime', type: 'time', imp: true, field: 'start time', placeHolder: "" },
        { name: 'endTime', type: 'time', imp: true, field: 'end time', placeHolder: "" },
        { name: 'TSD', type: 'time', field: 'total shift duration', placeHolder: "", readOnly: true },
        { name: 'threshhold_HalfDay', type: 'number', field: 'threshold for half day', placeHolder: "" },
        { name: 'minHour_FullDay', type: 'number', field: 'min. hour for full day', placeHolder: "" }
    ]);

    const [field2, setField2] = useState([
        { name: 'entryGP', type: 'number', field: 'entry GP', placeHolder: "", imp: false },
        { name: 'exitGP', type: 'number', field: 'exit GP', placeHolder: "", imp: false },
        { name: 'checkInBefore', type: 'number', field: 'check in before shift start time', placeHolder: "", extra: "", imp: false },
        { name: 'checkInAfter', type: 'number', field: 'check in after shift end time', placeHolder: "", extra: "", imp: false }
    ]);
    const allFields = [field1, field2]
    const [fields, setFields] = useState(allFields[0])
    function resetForm() {
        if (fomSubmitted) {
            setFormData({
                shiftName: "",
                startTime: "",
                endTime: "",
                TSD: "",
                threshhold_HalfDay: "",
                minHour_FullDay: "",
                entryGP: "",
                exitGP: "",
                checkInBefore: "",
                checkInAfter: "",
            })
        }
    }
    function getTimeDifference(time1, time2) {
        function timeToMinutes(timeString) {
            const [hours, minutes] = timeString.split(":");
            return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
        }

        const time1Minutes = timeToMinutes(time1);
        const time2Minutes = timeToMinutes(time2);

        const differenceMinutes = Math.abs(time1Minutes - time2Minutes);

        const hours = Math.floor(differenceMinutes / 60);
        const minutes = differenceMinutes % 60;

        return { hours, minutes };
    }

    const onSubmit = async () => {
        console.log(formData);

        const { hours, minutes } = getTimeDifference(formData.endTime, formData.startTime);
        console.log(hours, minutes);
        return;
        if (formData['shiftName'].trim() === '') {
            toast.warn("Shieft Name required.", toasterObj)
            return
        }
        setDisabledBtn(true);
        axios.post(`/api/timeAtt/getShift`, formData)
            .then((response) => {
                const responseData = response.data;
                setDisabledBtn(false);
                if (!responseData.success) {
                    toast.error(responseData.message, toasterObj);
                    return;
                }
                pushNewData(responseData.data);
                resetForm();
                toast.success(responseData.message, toasterObj);
            }).catch(err => { toast.error("Internal server error.", toasterObj); setDisabledBtn(false); })
    }


    return (
        <>
            <div className=" absolute top-0 left-0 w-full h-full rounded-lg flex items-center justify-center px-2 bg-[#7474740c] z-50" style={{ display: visibility }}>
                <div className="w-[99.1%] h-full rounded-lg backdrop-blur-[2px] flex items-center justify-center bg-[#3f3f3f3f] py-2">
                    <div action="" className='z-0 relative min-w-[450px] w-1/2 h-full rounded-lg bg-zinc-900 text-white flex flex-col overflow-hidden' style={{ width: width }}>
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

                        <div className={`w-full h-full bg-zinc-700`}>
                            <form className=" whitespace-nowrap h-full" onSubmit={(e) => {
                                e.preventDefault();
                                onSubmit()
                            }}>
                                <div className={`w-full p-4 grid-cols-2 grid gap-y-3 gap-x-5 pb-16`} style={{ gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))` }}>
                                    {
                                        fields.map((items) => (
                                            <InputField params={items} key={items.name} state={{ formData, setFormData }} />
                                        ))
                                    }
                                </div>
                                <footer className="absolute bottom-0 left-0 w-full bg-zinc-900 flex items-center justify-between py-2 px-2 text-blue-600">
                                    <h2 className='font-mono text-xl'>Add new employee</h2>
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
