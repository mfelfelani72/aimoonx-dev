import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// svg
import aimoonxall from "../../../assets/icons/svg/aimoonxall.svg";
import persona_landing from "../../../assets/icons/svg/persona_landing.svg";
import login from "../../../assets/icons/svg/login.svg";
import plus from "../../../assets/icons/svg/Plus.svg";
import telegram from "../../../assets/icons/svg/tg.svg";
import google from "../../../assets/icons/svg/Google.svg";

const AuthLanding = () => {
  const { t } = useTranslation();

  return (
    <div className="xs:justify-self-center xs:w-[20rem]">
      <div className="flex flex-col justify-end h-[calc(100vh-2rem)]">
        <div className="flex flex-row">
          <img
            className="w-[4.56rem] h-[4.56rem]"
            src={aimoonxall}
            alt="logo"
            loading="lazy"
          ></img>
        </div>
        <div className="flex">
          <div className="text-[#1f1e2e] text-3xl font-bold">{t("title")}</div>
        </div>
        <div className="flex flex-row self-center my-4">
          <img
            className=""
            src={persona_landing}
            alt="persona landing"
            // loading="lazy"
          ></img>
        </div>
        <div className="flex gap-2">
          <Link
            className="basis-1/2 h-14 flex flex-row justify-center items-center bg-white/0 rounded-2xl !bg-[#e57c43]"
            to="/login"
          >
            <div className="flex flex-row gap-2 ">
              <div className="">
                <img
                  alt="login"
                  src={login}
                  loading="lazy"
                  className="w-full h-full"
                ></img>
              </div>
              <div className="text-white font-bold">{t("sign_in")}</div>
            </div>
          </Link>
          <Link
            className="basis-1/2 flex flex-row justify-center items-center bg-white/0 rounded-2xl border border-[#1f1e2e]"
            to="/sign-up"
          >
            <div className="flex flex-row gap-2 ">
              <div className="">
                <img
                  alt="sign-up"
                  src={plus}
                  loading="lazy"
                  className="w-full h-full"
                ></img>
              </div>
              <div className="text-[#1f1e2e] font-bold">{t("sign_up")}</div>
            </div>
          </Link>
        </div>
        <div className="flex">
          <div className="basis-1/3 h-[0px] my-6 border border-[#d9d9d9]"></div>
          <div className="basis-1/3 text-[#797882] text-center my-[0.8rem]">
            {t("or_register")}
          </div>
          <div className="basis-1/3 h-[0px] my-6 border border-[#d9d9d9]"></div>
        </div>
        <div className="flex">
          <div className="w-full h-14 bg-[#f0ecfc] rounded-2xl justify-center items-center gap-2 inline-flex">
            <div className="w-6 h-6">
              <img
                alt="telegram"
                src={telegram}
                loading="lazy"
                className="w-full h-full"
              ></img>
            </div>
            <div className="text-[#1f1e2e] font-bold">
              {t("register_telegram")}
            </div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-full h-14 px-4 py-2 bg-[#dde9f6] rounded-2xl justify-center items-center gap-2 inline-flex">
            <div className="w-6 h-6">
              <img
                alt="google"
                src={google}
                loading="lazy"
                className="w-full h-full"
              ></img>
            </div>
            <div className="text-[#1f1e2e] text-base font-bold">
              {t("register_google")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLanding;
