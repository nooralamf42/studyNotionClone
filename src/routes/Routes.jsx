import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../components/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import NoAuth from "../pages/NoAuth";

export default function ({ isLogged, setIsLogged }) {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route
          path="/login"
          element={<Login setIsLogged={setIsLogged} isLogged={isLogged} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLogged={setIsLogged} isLogged={isLogged} />}
        />

        <Route path="/dashboard" Component={ isLogged? Dashboard : NoAuth} />

        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}
