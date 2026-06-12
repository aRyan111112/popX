import { useState } from "react";
import Input from "../components/Input.jsx";
import { useNavigate } from "react-router-dom";
useNavigate

function RegisterScreen() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        isAgency: "yes",
    });

    const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

    return (
        <div className="w-[390px] min-h-[780px] bg-[#fafafa] border border-[#e2e2e8] rounded flex flex-col overflow-hidden relative">
            <div className="px-7 pt-10 pb-[100px]">
                <h1 className="text-[26px] font-bold text-[#1a1a2e] m-0 mb-7 leading-snug">
                    Create your
                    <br />
                    PopX account
                </h1>

                <Input label="Full Name*" value={form.fullName} onChange={set("fullName")} placeHolder="Mary Doe"/>
                <Input label="Phone number*" type="tel" value={form.phone} onChange={set("phone")} placeHolder="0123456789"/>
                <Input label="Email address*" type="email" value={form.email} onChange={set("email")} placeHolder="marydoe@gmail.com"/>
                <Input label="Password*" type="password" value={form.password} onChange={set("password")} placeHolder="Mary Doe"/>
                <Input label="Company name" value={form.company} onChange={set("company")} placeHolder="Mary Doe"/>

                <p className="text-sm text-[#555] mt-1 mb-[10px] font-medium">Are you an Agency?*</p>
                <div className="flex gap-6 mb-2">
                    {["yes", "no"].map((opt) => (
                        <label
                            key={opt}
                            className="flex items-center gap-[7px] cursor-pointer text-sm text-[#333]"
                        >
                            <span
                                className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0"
                                style={{
                                    border: `2px solid ${form.isAgency === opt ? "#6c3be8" : "#bbb"}`,
                                }}
                                onClick={() => set("isAgency")(opt)}
                            >
                                {form.isAgency === opt && (
                                    <span className="w-[9px] h-[9px] rounded-full bg-[#6c3be8]" />
                                )}
                            </span>
                            {opt.charAt(0).toUpperCase() + opt.slice(1)}
                        </label>
                    ))}
                </div>
            </div>

            <div className="sticky bottom-0 px-7 py-4 bg-[#fafafa] border-t border-[#eee]">
                <button
                    className="bg-[#6c3be8] text-white border-none rounded-lg py-[14px] w-full text-[15px] font-semibold cursor-pointer tracking-[0.2px]"
                    onClick={() => navigate("/accountscreen")}
                >
                    Create Account
                </button>
            </div>
        </div>
    );
}

export default RegisterScreen;
