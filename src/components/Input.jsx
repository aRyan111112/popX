import { useState } from "react";


function Input({ label, type = "text", value, onChange, placeHolder }) {
    const [focused, setFocused] = useState(false);
    const active = focused || value.length > 0;

    return (
        <div className="relative mb-[18px]">
            <label
                className="absolute left-3 px-1 pointer-events-none z-10 font-medium"
                style={{
                    top: -8,
                    fontSize: 11,
                    color: "#6c3be8",
                    backgroundColor: "#fafafa",
                    fontWeight: 500,
                }}
            >
                {label}
            </label>
            <input
                placeholder={placeHolder}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full box-border rounded-lg px-3 pt-[14px] pb-[10px] text-sm text-[#333] bg-transparent outline-none"
                style={{
                    border: `1px solid ${focused ? "#6c3be8" : "#ddd"}`,
                }}
            />
        </div>
    );
}

export default Input;