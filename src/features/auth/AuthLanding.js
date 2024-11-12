import React from "react";

// svg
import aimoonxall from "../../../assets/icons/svg/aimoonxall.svg";
import persona_landing from "../../../assets/icons/svg/persona_landing.svg";

const AuthLanding = () => {
  return (
    <>
      <div className="flex flex-col justify-end bg-rose-200 !h-full">
        <div className="flex flex-row">
          <img
            className="w-[4.56rem] h-[4.56rem]"
            src={aimoonxall}
            alt="logo"
            loading="lazy"
          ></img>
        </div>
        <div className="flex">
          <div className="text-right text-[#1f1e2e] text-[32px] font-">
            هوشمندترین، صرافی آنلاین
          </div>
        </div>
        <div className="flex flex-row self-center mt-4">
          <img className="" src={persona_landing} alt="persona landing" loading="lazy"></img>
        </div>
        <div className="flex">sad</div>
        <div className="flex">sad</div>
        <div className="flex">sad</div>
        <div className="flex">sad</div>
      </div>
    </>
  );
};

export default AuthLanding;
