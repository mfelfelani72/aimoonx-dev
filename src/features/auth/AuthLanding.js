import React from "react";

// svg
import aimoonxall from "../../../assets/icons/svg/aimoonxall.svg";
import persona_landing from "../../../assets/icons/svg/persona_landing.svg";
import login from "../../../assets/icons/svg/login.svg";
import plus from "../../../assets/icons/svg/Plus.svg";

const AuthLanding = () => {
  return (
    <>
      <div className="flex flex-col justify-end  !h-full">
        <div className="flex flex-row">
          <img
            className="w-[4.56rem] h-[4.56rem]"
            src={aimoonxall}
            alt="logo"
            loading="lazy"
          ></img>
        </div>
        <div className="flex">
          <div className="text-right text-[#1f1e2e] text-3xl font-bold">
            هوشمندترین، صرافی آنلاین
          </div>
        </div>
        <div className="flex flex-row self-center my-4">
          <img
            className=""
            src={persona_landing}
            alt="persona landing"
            loading="lazy"
          ></img>
        </div>
        <div className="flex gap-2">
          <div class="basis-1/2 h-14 px-4 py-2 bg-[#e57c43] rounded-2xl justify-center items-center gap-2 inline-flex">
            <div class="w-6 justify-center items-center">
              <img alt="login" src={login} className="w-full h-full"></img>
            </div>
            <div class="text-white font-bold font-['Yekan Bakh']">ورود</div>
          </div>

          <div class="basis-1/2 px-4 py-2 bg-white/0 rounded-2xl border border-[#1f1e2e] justify-center items-center gap-2 inline-flex">
            <div class="justify-center items-center flex">
              <img alt="login" src={plus} className="w-full h-full"></img>
            </div>
            <div class="text-[#1f1e2e] font-bold">ثبت‌نام</div>
          </div>
        </div>
        <div className="flex">
          <div class="basis-1/3 h-[0px] my-6 border border-[#d9d9d9]"></div>
          <div class="basis-1/3 text-[#797882] text-center my-[0.8rem] font-normal">یا ثبت نام با</div>
          <div class="basis-1/3 h-[0px] my-6 border border-[#d9d9d9]"></div>
        </div>
        <div className="flex">sad</div>
        <div className="flex">sad</div>
      </div>
    </>
  );
};

export default AuthLanding;
