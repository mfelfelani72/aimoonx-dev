import React from "react";
import loader from "../../../assets/icons/svg/loading.gif";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <img alt="loader" src={loader} width={100} height={100} />
    </div>
  );
};

export default Loader;
