import React from "react";

const BackgroundBubble = ({ className }) => {
  return (
    <div
      className={`bg-blue-600 z-10 absolute w-[250px] h-[250px] rounded-full ${className}`}
    />
  );
};

export default BackgroundBubble;
