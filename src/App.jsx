import Routes from "./components/Routes"
import Navbar from "./components/Navbar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  function showToast(messege, type){
    toast(messege)
    console.log("toaster function got called !")
  }

  return (
    <div className="max-w-[1160px] w-11/12 mx-auto py-6">
      <ToastContainer/>
      <Navbar/>
      <Routes showToast={showToast}/>
    </div>
  )
}

export default App
