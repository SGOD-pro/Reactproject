import { useState, useRef, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Alert from './components/Alert'
import { AlertProvider, DataContextProvider } from "./context"
import axios from 'axios'
function App() {
  const alertDiv = useRef(null)
  const [alert, setalert] = useState({})
  const [empTableData, setEmpTableData] = useState([])
  const [timeoutId, setTimeoutId] = useState(null);

  const setAlert = (successCode, message) => {
    setalert({ successCode, message, success: successCode < 400 });
    alertDiv.current.style.display = 'block';
    alertDiv.current.style.opacity = '1';
    const t1 = setTimeout(() => {
      alertDiv.current.style.opacity = '0';
      setTimeout(() => {
        alertDiv.current.style.display = 'none';
      }, 500);
    }, 5000);
    setTimeoutId(t1);
  }

  const displyNone = () => {
    clearTimeout(timeoutId);
    alertDiv.current.style.display = 'none';
  }

  useEffect(() => {
    displyNone()
    axios.get("/api/details/table-deitails")
      .then(response => {
        console.log(response.data.data);
        setEmpTableData(null)
        setEmpTableData(response.data.data)
      }).catch(err => {
        setAlert(500, "Internal Error occurs")
      })
  }, [])

  return (
    <>
      <AlertProvider value={{ alert, setAlert }}>
        <DataContextProvider value={{ empTableData, setEmpTableData }}>
          <Navbar />
          <div className="fixed top-20 right-4 text-white z-10 transition duration-700 opacity-0" ref={alertDiv}>
            <Alert success={alert.success} msg={alert.message && alert.message} close={displyNone} />
          </div>
          <div className="p-3 w-[100% - 6rem] h-screen dark:bg-zinc-800 ml-24 flex flex-col">
            <Header />
            <Outlet />
          </div>
        </DataContextProvider>
      </AlertProvider>
    </>
  )
}

export default App
