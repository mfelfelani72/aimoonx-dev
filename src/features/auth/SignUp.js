import React from "react";
import { useTranslation } from "react-i18next";

// svg
import closeSquare from "../../../assets/icons/svg/CloseSquare.svg";
import message from "../../../assets/icons/svg/Message.svg";
import call from "../../../assets/icons/svg/Call.svg";

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col justify-start mt-2 h-[calc(100vh-6rem)]">
        <div className="flex text-[#1f1e2e] text-xl font-bold">
          {t("sign_up")}
        </div>
        <div className="flex text-[#797882] mt-3">
          {t("choose_email_mobile")}
        </div>

        <div className="relative mt-6">
          <div className="w-full h-12 px-1.5 bg-[#dde9f6] rounded-2xl justify-between items-center gap-1.5 inline-flex">
            <input
              type="radio"
              id="tab1"
              name="tab"
              className="hidden peer/tab1 w-full"
              defaultChecked
            />
            <input
              type="radio"
              id="tab2"
              name="tab"
              className="hidden peer/tab2 w-full"
            />
            <div className="basis-1/2 peer-checked/tab1:bg-white hover:bg-slate-50 py-1.5 rounded-xl text-center text-[#1f1e2e] text-sm">
              <label
                htmlFor="tab1"
                className="tab-button cursor-pointer px-[calc(10.2vw)] select-none"
              >
                {t("email")}
              </label>
            </div>
            <div className="basis-1/2 peer-checked/tab2:bg-white hover:bg-slate-50 py-1.5 rounded-xl text-center text-[#1f1e2e] text-sm">
              <label
                htmlFor="tab2"
                className="tab-button cursor-pointer px-[calc(10.2vw)] select-none"
              >
                {t("phone_number")}
              </label>
            </div>

            <div className="tab1-content mt-8 w-full absolute right-0 top-10 hidden peer-checked/tab1:block">
              <div className="w-full px-4 py-2.5 bg-[#edf4fa] rounded-2xl border border-[#dde9f6] justify-between items-center inline-flex">
                <div className="flex justify-start items-center gap-2">
                  <div className="flex">
                    <img
                      alt="sign-up"
                      src={message}
                      loading="lazy"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div className="text-[#727272] mt-1">aimoonx@gmail.com</div>
                </div>
                <div className="flex">
                  <img
                    alt="sign-up"
                    src={closeSquare}
                    loading="lazy"
                    className="w-full h-full"
                  ></img>
                </div>
              </div>

              <div className="flex mt-3 mx-3">
                <div className="text-[#e54343] text-xs font-bold font-['Yekan Bakh'] leading-none">
                  {t("error_invalid_email")}
                </div>
              </div>
            </div>

            <div className="tab2-content mt-8 absolute w-full top-10 right-0 hidden peer-checked/tab2:block">
              <div className="w-full px-4 py-2.5 bg-[#edf4fa] rounded-2xl border border-[#dde9f6] justify-between items-center inline-flex">
                <div className="flex justify-start items-center gap-2">
                  <div className="flex">
                    <img
                      alt="sign-up"
                      src={call}
                      loading="lazy"
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div className="text-[#727272] mt-1">09150873107</div>
                </div>
                <div className="flex">
                  <img
                    alt="sign-up"
                    src={closeSquare}
                    loading="lazy"
                    className="w-full h-full"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end pb-4">
        <div className="w-full h-14 px-4 py-2 bg-[#e57c43] rounded-2xl justify-center items-center gap-2 inline-flex">
          <div className="text-white">{t("sign_up")}</div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
