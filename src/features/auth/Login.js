import React from "react";
import { useTranslation } from "react-i18next";

// svg
import closeSquare from "../../../assets/icons/svg/CloseSquare.svg";
import lock from "../../../assets/icons/svg/Lock.svg";

const Login = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col justify-start mt-2 h-[calc(100vh-6rem)]">
        <div className="flex text-[#1f1e2e] text-xl font-bold">
          {t("sign_in")}
        </div>

        <div className="flex text-[#797882] mt-3">
          {t("input_info_sign_in")}
        </div>
        <div className="flex mt-3">
          <div className="w-full px-4 py-2 bg-[#f7f6fe] rounded-2xl border border-[#f0ecfc] justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="py-2.5 justify-center items-center gap-2.5 flex">
                <div className="text-[#727272] text-sm font-normal leading-[11.10px]">
                  aimoonx@gmail.com
                </div>
              </div>
            </div>

            <div className="justify-center items-center flex">
              <img
                alt="sign-up"
                src={closeSquare}
                loading="lazy"
                className="w-full h-full"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex text-[#797882] mt-8">{t("input_pass")}</div>

        <div className="flex flex-col">
          <div className="opacity-60 text-[#0c0c0c] text-xs mt-3 mb-0.5 mx-6">
            {t("password")}
          </div>

          <div className="w-full px-4 py-2.5 bg-[#edf4fa] rounded-2xl border border-[#dde9f6] justify-between items-center inline-flex">
            <div className="flex justify-start items-center gap-2">
              <div className="flex">
                <img
                  alt="lock"
                  src={lock}
                  loading="lazy"
                  className="w-full h-full"
                ></img>
              </div>
              <div className="text-[#727272] mt-1">xxxx xxxx xxxx xxxx</div>
            </div>
            <div className="flex">
              <img
                alt="closeSquare"
                src={closeSquare}
                loading="lazy"
                className="w-full h-full"
              ></img>
            </div>
          </div>

          <div className="flex mt-3 mx-3">
            <div className="text-[#e54343] text-xs font-bold font-['Yekan Bakh'] leading-none">
              {t("error_user_already_exist")}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end pb-4">
        {/* <div className="flex"> */}
          <div className="w-full h-14 px-4 py-2 bg-[#e57c43] rounded-2xl justify-center items-center gap-2 inline-flex">
            <div className="text-white">{t("sign_in")}</div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Login;
