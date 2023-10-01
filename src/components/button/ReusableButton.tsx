import React from "react";
import { ButtonPropsType } from "./Button.type";

const ReusableButton = ({ text, className }: ButtonPropsType) => {
  return (
    <div>
      <button className={`${className} hover:border-black hover:border-solid`}>
        {text}
      </button>
    </div>
  );
};

export default ReusableButton;
