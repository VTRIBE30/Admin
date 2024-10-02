import React from "react";
import { ButtonProps } from "../../../types/Interface";

export const ButtonBg: React.FC<ButtonProps> = ({ children, disabled, onClick, className, ...rest }) => {
  return (
    <>
      <button
        className={`w-full ${disabled ? "bg-gray-500" : " cursor-pointer"
          } rounded-2xl items-center justify-center inline-flex text-center text-white text-base font-medium leading-normal ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
