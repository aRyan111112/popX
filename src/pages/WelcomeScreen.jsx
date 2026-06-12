import { useNavigate } from "react-router-dom";
function WelcomeScreen() {
    const navigate = useNavigate();

  return (
    <div className="w-[390px] min-h-[700px] bg-[#fafafa] border border-[#e2e2e8] rounded flex flex-col overflow-hidden relative">
      <div className="flex-1" />
      <div className="px-7 pb-10">
        <h1 className="text-[26px] font-bold text-[#1a1a2e] m-0 mb-[10px]">
          Welcome to PopX
        </h1>
        <p className="text-sm text-[#888] leading-relaxed m-0 mb-7">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
        <button
          className="bg-[#6c3be8] text-white border-none rounded-lg py-[14px] w-full text-[15px] font-semibold cursor-pointer tracking-[0.2px]"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
        <div className="h-3" />
        <button
          className="bg-[#ddd6f8] text-[#3d1f8a] border-none rounded-lg py-[14px] w-full text-[15px] font-semibold cursor-pointer tracking-[0.2px]"
          onClick={() => navigate("/signin")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;