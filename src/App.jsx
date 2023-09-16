import Routes from "./routes/Routes";
import Navbar from "./components/Navbar";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {

  let [isLogged, setIsLogged] = useState(false)

  return (
    <div className="max-w-[1160px] w-11/12 mx-auto py-6">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar setIsLogged={setIsLogged} isLogged={isLogged}/>
      <Routes setIsLogged={setIsLogged} isLogged={isLogged}/>
    </div>
  );
}

export default App;
