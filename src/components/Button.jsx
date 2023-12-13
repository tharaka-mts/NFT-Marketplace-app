import React from "react";

const Button = ({ className, title, type }) => {
  const outline =
    "text-lightBlue border-lightBlue hover:bg-lightBlue hover:text-white hover:border-dimWhite";
  const solid = "bg-lightBlue text-white border-lightBlue hover:bg-[#2eb2ff]";
  const buttonType = type === "solid" ? solid : outline;

  return (
    <button
      type="button"
      className={`rounded-full border px-5 py-2 transition-colors duration-[600ms] ease-in-out ${buttonType} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
