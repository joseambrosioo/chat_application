import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
// import Toast, { Toaster } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
