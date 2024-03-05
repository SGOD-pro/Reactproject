import React, { useEffect, useState, useRef } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputField from './InputField';
import Alert from '../Alert';
import axios from 'axios';
import { useAlert } from '../../context'
function AddEmployee(props) {
    const { setAlert } = useAlert()
    const [disabledBtn, setDisabledBtn] = useState(false)
    const { visibility, setVisibility } = props.visibility
    const [fomSubmitted, setFormSubmitted] = useState(false)
    const fieldButton = ['Overview', 'Joining', 'salary']
    const departments = [
        "Engineering",
        "Marketing",
        "Finance",
        "Human Resources",
        "Sales",
        "Research and Development",
        "Customer Service",
        "Information Technology",
        "Operations",
        "Legal"
    ]
    const designations = [
        "Software Engineer",
        "Product Manager",
        "UI/UX Designer",
        "Data Scientist",
        "Business Analyst",
        "Quality Assurance Engineer",
        "Marketing Specialist",
        "Financial Analyst",
        "HR Manager",
        "Sales Representative"
    ]
    const [active, setActive] = useState([true, false, false])
    const activeHandeler = (i) => {
        const newActive = [...active];
        for (let index = 0; index < active.length; index++) {
            newActive[index] = (index === i);
        }
        setActive(newActive);
    }

    const readOnlyTrue = (fields) => {
        return fields.map(field => ({ ...field, readOnly: true }));
    };
    const readOnlyFalse = (fields) => {
        return fields.map(field => ({ ...field, readOnly: false }));
    };


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
    const handleChange3 = (e) => {
        const { name, value, type, files } = e.target;
        setFormData3(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }));
    };


    const [formData1, setFormData1] = useState({
        first_Name: "",
        middle_Name: "",
        last_Name: "",
        date_of_birth: "",
        gender: "",
        postal_Code: "",
        address: "",
        emailId: "",
        whatsappNo: "",
        addhar: "",
        pan: ""
    });
    const [formData2, setFormData2] = useState({
        date_of_joining: "",
        branch: "",
        department: "",
        designation: "",
        default_shift: "",
        reports_to: "",
        geo_fence: "",
        status: "",
        profile_picture: "",
        empId: ""
    }
    );
    const [formData3, setFormData3] = useState({
        salary_structure: "",
        salary_mode: "",
        branch_name: "",
        account_no: "",
        IFSC_code: "",
        IMCR_code: "",
        PF_UAN: "",
        ESIC_NO: "",
        PF_ACCOUNT_no: "",
        empId: ""
    }
    );


    const [field1, setField1] = useState([
        { name: 'first_Name', type: 'text', imp: true, eventChange: handleChange1, readOnly: false },
        { name: 'middle_Name', type: 'text', imp: false, eventChange: handleChange1, readOnly: false },
        { name: 'last_Name', type: 'text', imp: true, eventChange: handleChange1, readOnly: false },
        { name: 'date_of_birth', type: 'date', imp: true, eventChange: handleChange1, readOnly: false },
        { name: 'gender', type: 'select', imp: true, options: ['male', 'female', 'others'], eventChange: handleChange1, readOnly: false },
        { name: 'postal_Code', type: 'number', imp: true, eventChange: handleChange1, readOnly: false },
        { name: 'address', type: 'text', imp: true, eventChange: handleChange1, readOnly: false },
        { name: 'emailId', type: 'email', imp: false, eventChange: handleChange1, readOnly: false },
        { name: 'whatsappNo', type: 'number', imp: true, eventChange: handleChange1, readOnly: false },
        { name: 'addhar', type: 'file', imp: false, accept: 'application/pdf', eventChange: handleChange1, readOnly: false },
        { name: 'pan', type: 'file', imp: false, accept: 'application/pdf', eventChange: handleChange1, readOnly: false }
    ]);

    const [field2, setField2] = useState([
        { name: 'date_of_joining', type: 'date', imp: true, eventChange: handleChange2, readOnly: false },
        { name: 'branch ', type: 'text', imp: false, eventChange: handleChange2, readOnly: false },
        { name: 'department', type: 'select', options: departments, imp: true, eventChange: handleChange2, readOnly: false },
        { name: 'designation', type: 'select', options: designations, imp: true, eventChange: handleChange2, readOnly: false },
        { name: 'reports_to', type: 'select', imp: false, options: ['null'], eventChange: handleChange2, readOnly: true },
        { name: 'default_shift', type: 'select', options: ["day", 'night'], imp: true, eventChange: handleChange2, readOnly: false },
        { name: 'geo-fence', type: 'text', imp: false, eventChange: handleChange2, readOnly: false },
        { name: 'status', type: 'text', imp: false, eventChange: handleChange2, readOnly: false },
        { name: 'profile_picture', type: 'file', imp: false, accept: 'image/*', eventChange: handleChange2, readOnly: false }
    ]);

    const [field3, setField3] = useState([
        { name: 'salary_structure', type: 'text', imp: true, eventChange: handleChange3, readOnly: false },
        { name: 'salary_mode', type: 'text', imp: true, eventChange: handleChange3, readOnly: false },
        { name: 'branch_name', type: 'text', imp: true, eventChange: handleChange3, readOnly: false },
        { name: 'account_no', type: 'text', imp: true, eventChange: handleChange3, readOnly: false },
        { name: 'IFSC_code', type: 'text', imp: true, eventChange: handleChange3, readOnly: false },
        { name: 'IMCR_code', type: 'number', imp: true, eventChange: handleChange3, readOnly: false },
        { name: 'PF_UAN', type: 'text', imp: true, eventChange: handleChange3, readOnly: false },
        { name: 'ESIC_NO', type: 'text', imp: true, eventChange: handleChange3, readOnly: false },
        { name: 'PF_ACCOUNT_no', type: 'number', imp: true, eventChange: handleChange3, readOnly: false }
    ]);



    const fields = [field1, field2, field3]
    const formData = [formData1, formData2, formData3]
    const setXAxis = (index) => {
        let elem = document.querySelector('.elems')
        let width = elem.clientWidth * index
        setTranslatex(-1 * width)
    }
    const [translatex, setTranslatex] = useState(0)


    const onSubmit1 = (e) => {
        e.preventDefault();

        if (!formData1['gender'] || formData1['gender'] === "") {
            setDisabledBtn(false);
            setAlert(400, "Gender Required.");
            return;
        }

        setDisabledBtn(true);

        axios.post("/api/employee/register", formData1)
            .then((response) => {
                setDisabledBtn(false);
                const responseData = response.data;
                setAlert(response.data.statusCode, response.data.message);
                if (!responseData.success) {
                    return;
                }
                const updatedField = readOnlyTrue(field1);
                setField1(updatedField);
                localStorage.setItem("empId", responseData.data.empId);
            })
            .catch(error => {
                console.error("Error:", error);
                setDisabledBtn(false);
                setAlert(401, "Couldn't save");
            });
    };

    const onSubmit2 = (e) => {
        e.preventDefault();

        if (!formData2['department'] || !formData2['designation'] || !formData2['default_shift']) {
            setAlert(401, "Some field is missing");
            return;
        }

        const empId = localStorage.getItem("empId");
        if (!empId) {
            setAlert(404, "Employee id not found.");
            console.log("Empid not found..");
            return;
        }

        setDisabledBtn(true);
        setFormData2(prev => ({ ...prev, empId }));
        const data = { ...formData2, empId };
        console.log(data);

        axios.post(`/api/employee/joining`, data)
            .then((response) => {
                setDisabledBtn(false);
                const responseData = response.data;
                console.log(response.data);
                setAlert(response.data.statusCode, response.data.message);
                if (!responseData.success) {
                    return;
                }
                const updatedField = readOnlyTrue(field2);
                setField2(updatedField);
                localStorage.setItem("date_of_joining", responseData.data.date_of_joining);
            })
            .catch(error => {
                console.error("Error:", error);
                setDisabledBtn(false);
                setAlert(401, "Couldn't save");
            });
    };

    const onSubmit3 = (e) => {
        e.preventDefault();
        const empId = localStorage.getItem("empId");
        if (!empId) {
            setAlert(404, "Employee id not found.");
            return;
        }
        setDisabledBtn(true);
        const data = { ...formData3, empId };
        axios.post(`/api/employee/salary`, data)
            .then((response) => {
                setDisabledBtn(false);
                const responseData = response.data;
                console.log(response.data);
                setAlert(responseData.statusCode, responseData.message);
                if (!responseData.success) {
                    return;
                }
                setFormSubmitted(true);
                localStorage.removeItem("empId");
                localStorage.removeItem("date_of_joining");
            })
            .catch((error) => {
                console.error("Error:", error);
                setAlert(401, "Couldn't save.");
            });
    };

    const showData = () => {
        console.log(formData1);
        console.log(formData2);
        console.log(formData3);
    }
    const submitEvents = [onSubmit1, onSubmit2, onSubmit3]

    useEffect(() => {
        if (fomSubmitted) {
            setFormData3({
                salary_structure: "",
                salary_mode: "",
                branch_name: "",
                account_no: "",
                IFSC_code: "",
                IMCR_code: "",
                PF_UAN: "",
                ESIC_NO: "",
                PF_ACCOUNT_no: "",
                empId: ""
            })
            setFormData2({
                date_of_joining: "",
                branch: "",
                department: "",
                designation: "",
                default_shift: "",
                reports_to: "",
                geo_fence: "",
                status: "",
                profile_picture: "",
                empId: ""
            })
            setFormData1({
                first_Name: "",
                middle_Name: "",
                last_Name: "",
                date_of_birth: "",
                gender: "",
                postal_Code: "",
                address: "",
                emailId: "",
                whatsappNo: "",
                addhar: "",
                pan: ""
            })
            let updatedField = readOnlyFalse(field1)
            setField1(updatedField)

            updatedField = readOnlyFalse(field2)
            setField2(updatedField)

            updatedField = readOnlyFalse(field3)
            setField3(updatedField)
        }
        setFormSubmitted(false)
    }, [fomSubmitted])


    useEffect(() => {
        const empId = localStorage.getItem("empId")
        if (empId) {
            const updatedField = readOnlyTrue(field1)
            setField1(updatedField)
            axios.get(`/api/employee/getOverview?empId=${empId}`)
                .then(responce => {
                    console.log(responce.data);
                    if (!responce.data.success) {
                        setAlert(responce.data.statusCode, responce.data.message)
                        return;
                    }
                    const x = responce.data.data
                    console.log(x);
                    setFormData1(null)
                    setFormData1(x)
                }).catch(err => { console.log(err); })
        }
        const doj = localStorage.getItem("date_of_joining")
        if (doj) {
            const updatedField = readOnlyTrue(field2)
            console.log(empId);
            setField2(updatedField)
            axios.get(`/api/employee/getJoinning?empId=${empId}`).then(responce => {

                if (!responce.data.success) {
                    setAlert(responce.data.statusCode, responce.data.message)
                    return;
                }
                const x = responce.data.data
                console.log(formData2);
                setFormData2(null)
                setFormData2(x)
            }).catch(err => { console.log(err); })
        }

    }, [])


    return (
        <>
            <div className="fixed top-20 right-4">
                {/* <Alert success={false} msg={"Some thing went wrong.."} /> */}
            </div>

            <div className=" absolute top-0 left-0 w-full h-full rounded-lg flex items-center justify-center px-2 bg-[#7474740c]" style={{ display: visibility }}>
                <div className="w-[99.1%] h-full rounded-lg backdrop-blur-[2px] flex items-center justify-center bg-[#3f3f3f3f] py-2">
                    <div action="" className='z-0 relative min-w-[450px] w-1/2 h-full rounded-lg bg-zinc-900 text-white flex flex-col overflow-hidden' onSubmit={(e) => { e.preventDefault() }}>
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
                                        <span className='px-8 text-red-400'>{localStorage.getItem("empId") && `Employee Id: ${localStorage.getItem("empId")}`}</span>
                                        <div className={`w-full p-4 grid-cols-2 grid gap-y-3 gap-x-5 pb-16`} >
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

export default AddEmployee