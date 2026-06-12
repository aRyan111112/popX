function AccountScreen() {
  return (
    <div className="w-[390px] min-h-[700px] bg-[#fafafa] border border-[#e2e2e8] rounded flex flex-col overflow-hidden relative">

      <div className="px-6 py-5 bg-white border-b border-[#eee]">
        <h2 className="text-[17px] font-semibold text-[#1a1a2e] m-0">Account Settings</h2>
      </div>

      {/* profile block */}
      <div className="px-6 pt-6 pb-5">
        <div className="flex items-center gap-4 mb-5">
          <div className="relative flex-shrink-0">
            <div className="w-[62px] h-[62px] rounded-full bg-gradient-to-br from-[#c9b8f5] to-[#e8d5f5] overflow-hidden flex items-center justify-center">
              <img src="./Ellipse 114.png" alt="profile" />
            </div>
            {/* camera icon badge */}
            <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#6c3be8] flex items-center justify-center">
              <img src="./Group 1585.svg" alt="camera" />
            </div>
          </div>
          <div>
            <p className="m-0 font-bold text-[15px] text-[#1a1a2e]">Marry Doe</p>
            <p className="m-0 mt-[3px] text-[13px] text-[#777]">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-[13.5px] text-[#555] leading-[1.7] m-0">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="border-t-[1.5px] border-dashed border-[#ddd] mx-6" />

      <div className="flex-1" />

      <div className="border-t-[1.5px] border-dashed border-[#ddd] mx-6 mb-6" />
    </div>
  );
}

export default AccountScreen;