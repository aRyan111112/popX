import { useState } from "react";
import Input from "../components/Input.jsx";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const filled = email.trim() && password.trim();

    return (
        <div className="w-[390px] min-h-[700px] bg-[#fafafa] border border-[#e2e2e8] rounded flex flex-col overflow-hidden relative">
            <div className="px-7 pt-10">
                <h1 className="text-[26px] font-bold text-[#1a1a2e] m-0 mb-[10px] leading-snug">
                    Signin to your
                    <br />
                    PopX account
                </h1>
                <p className="text-sm text-[#888] leading-relaxed m-0 mb-7">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit,
                </p>

                <Input label="Email Address" type="email" value={email} onChange={setEmail} placeHolder="Enter your email"/>
                <Input label="Password" type="password" value={password} onChange={setPassword} placeHolder="Enter your password"/>

                <div className="h-2" />
                <button
                    className={`border-none rounded-lg py-[14px] w-full text-[15px] font-semibold tracking-[0.2px] ${filled
                            ? "bg-[#6c3be8] text-white cursor-pointer"
                            : "bg-[#d1d1d6] text-white cursor-default"
                        }`}
                    onClick={() => filled && navigate("/accountscreen")}
                >
                    Login
                </button>
            </div>
            <div className="flex-1" />
        </div>
    );
}

export default LoginScreen;