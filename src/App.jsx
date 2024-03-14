import { useState, useRef, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { DataContextProvider } from "./context"
import axios from 'axios'
import formatISODate from "../src/utils/DateFormater"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [empTableData, setEmpTableData] = useState([])
  const [shiftTableData, setShiftTableData] = useState([])

  const pushNewData = (obj) => {
    setEmpTableData(prev => [...prev, obj]);
  }
  const pushShiftTableData = (obj) => {
    setShiftTableData(prev => [...prev, obj]);
  }
  useEffect(() => {
    console.log(empTableData);
  }, [empTableData])

  useEffect(() => {
    axios.get("/api/employee/table-deitails")
      .then(response => {
        // toast.success(response.data.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // });
        if (!response.data.success) return;
        const data = response.data.data
        data.map(item => (item.date_of_joining ? (item.date_of_joining = formatISODate(item.date_of_joining)) : ""))
        console.log(data); // 'date_of_joining' will be updated in the 'data' object
        setEmpTableData(null)
        setEmpTableData(response.data.data)
      }).catch(err => {
        // toast.error('Internal problem occurs!', {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // });
      })
  }, [])
  useEffect(() => {
    axios.get('/api/timeAtt/getShift')
      .then(response => {
        if (!response.data.success) return;
        setShiftTableData(response.data.data)
      }).catch(error => {
        // toast.error('Internal problem occurs!', {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark",
        // });
      })

  }, [])

  return (
    <>
      <DataContextProvider value={{ empTableData, pushNewData, shiftTableData, pushShiftTableData }}>
        <Navbar />
        <ToastContainer />

        <div className="p-3 w-[100% - 6rem] h-screen dark:bg-zinc-800 ml-24 flex flex-col">
          <Header />
          <Outlet />
        </div>
      </DataContextProvider>
    </>
  )
}

export default App
