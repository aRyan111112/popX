import { useState } from "react";
import Input from "./components/Input.jsx";
import WelcomeScreen from "./pages/WelcomeScreen.jsx";
import LoginScreen from "./pages/SignIn.jsx";
import RegisterScreen from "./pages/SignUp.jsx";
import AccountScreen from "./pages/AccountScreen.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f9] flex items-center justify-center font-sans">
      <Routes>
        <Route path="/" element={<WelcomeScreen/>}/>
        <Route path="/signin" element={<LoginScreen/>}/>
        <Route path="/signup" element={<RegisterScreen/>}/>
        <Route path="/accountscreen" element={<AccountScreen/>}/>
      </Routes>
    </div>
  )
}
