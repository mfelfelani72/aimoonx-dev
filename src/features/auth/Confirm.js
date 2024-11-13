import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

// svg
import arow_right from "../../../assets/icons/svg/ar.svg";
import arrow_circle from "../../../assets/icons/svg/tp.svg";
import clock from "../../../assets/icons/svg/tc.svg";

const Confirm = () => {
  const { t } = useTranslation();
  return (
    <div className="justify-self-center md:w-[30rem]">
      <div className="flex flex-col justify-start h-[calc(100vh-4rem)]">
        <Link to="/sign-up">
          <div className="w-full justify-start items-center inline-flex mt-1">
            <div className="bg-[#f2f2f3] rounded-2xl px-5 py-3.5 ltr:rotate-180">
              <img
                alt="arow_right"
                src={arow_right}
                loading="lazy"
                className="w-full h-full"
              ></img>
            </div>
          </div>
        </Link>
        <div className="flex mt-8 text-[#1f1e2e] text-xl font-bold">
          {t("confirm_code")}
        </div>
        <div className="flex text-[#797882] mt-3">
          {t("send_to")} aimoonx@gmail.com
        </div>
        <div className="flex flex-row  mx-auto gap-2 mt-8">
          <div className="w-[calc(16vw)] md:w-[5rem] h-[calc(9vh)] md:h-[5rem] bg-[#dde9f6] rounded-2xl"></div>
          <div className="w-[calc(16vw)] md:w-[5rem] h-[calc(9vh)] md:h-[5rem] bg-[#dde9f6] rounded-2xl"></div>
          <div className="w-[calc(16vw)] md:w-[5rem] h-[calc(9vh)] md:h-[5rem] bg-[#dde9f6] rounded-2xl"></div>
          <div className="w-[calc(16vw)] md:w-[5rem] h-[calc(9vh)] md:h-[5rem] bg-[#dde9f6] rounded-2xl"></div>
          <div className="w-[calc(16vw)] md:w-[5rem] h-[calc(9vh)] md:h-[5rem] bg-[#dde9f6] rounded-2xl"></div>
        </div>
        <div className="flex w-full gap-2 justify-center mt-16">
          <div className="flex items-center gap-2">
            <img
              alt="clock"
              src={clock}
              loading="lazy"
              className="!w-5 !h-5"
            ></img>
          </div>
          <div className="mt-1 text-center text-[#1f1e2e] text-base font-bold">
            1:59 تا ارسال مجدد کد
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end pb-4">
        <div className="flex justify-between">
          <div className="text-[#797882] text-sm font-bold">
            {t("question_confirm_code")}
          </div>
          <div className="flex items-center gap-2">
            <img
              alt="arrow_circle"
              src={arrow_circle}
              loading="lazy"
              className="!w-[1.5rem] !h-[1.5rem]"
            ></img>
            <span className="text-right text-[#e57c43] text-base font-bold">
              {t("get_again_confirm")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
