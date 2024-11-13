import React from "react";

// svg
import closeSquare from "../../../assets/icons/svg/CloseSquare.svg";
import lock from "../../../assets/icons/svg/Lock.svg";

const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-end h-full pb-4">
        <div className="flex text-[#1f1e2e] text-xl font-bold">ورود</div>

        <div className="flex text-[#797882]">
          لطفا شماره موبایل یا نشانی اینترنتی خود را وارد نمایید.
        </div>
        <div className="flex">
          <div class="w-full px-4 py-2 bg-[#f7f6fe] rounded-2xl border border-[#f0ecfc] justify-between items-center inline-flex">
            <div class="justify-start items-center gap-2 flex">
              <div class="py-2.5 justify-center items-center gap-2.5 flex">
                <div class="text-[#727272] text-sm font-normal leading-[11.10px]">
                  mahdie.ehsan@gmail.com
                </div>
              </div>
            </div>

            <div class="justify-center items-center flex">
              <img
                alt="sign-up"
                src={closeSquare}
                loading="lazy"
                className="w-full h-full"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex text-[#797882]">
          لطفا رمز عبور خود را وارد نمایید.
        </div>

        <div className="flex flex-col">
          <div class="opacity-60 text-[#0c0c0c] text-xs">رمز عبور</div>

          <div class="w-full px-4 py-2.5 bg-[#edf4fa] rounded-2xl border border-[#dde9f6] justify-between items-center inline-flex">
            <div class="flex justify-start items-center gap-2">
              <div class="flex">
                <img
                  alt="sign-up"
                  src={lock}
                  loading="lazy"
                  className="w-full h-full"
                ></img>
              </div>
              <div class="text-[#727272] mt-1">xxxx xxxx xxxx xxxx</div>
            </div>
            <div class="flex">
              <img
                alt="sign-up"
                src={lock}
                loading="lazy"
                className="w-full h-full"
              ></img>
            </div>
          </div>

          <div class="h-[27px] pl-[9px] pr-2 py-2 left-[179px] top-[48px] justify-start items-center gap-2.5 inline-flex">
            <div class="text-[#e54343] text-xs font-bold font-['Yekan Bakh'] leading-none">
              این نشانی اینترنتی قبلا ثبت شده است.
            </div>
          </div>
        </div>
        <div className="flex mt-[18rem]">
          <div class="w-[361px] h-14 px-4 py-2 bg-[#e57c43] rounded-2xl justify-center items-center gap-2 inline-flex">
            <div class="text-white text-base font-bold font-['Yekan Bakh']">
              ورود
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
