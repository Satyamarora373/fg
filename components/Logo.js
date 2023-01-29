import React from "react";
import Image from "next/image"
import fg_image from "../assets/logo.png"
const Logo = () => {
  return <div className="logo">
    {/* Fintract Global */}
    <Image
      src={fg_image}
      height={100}
    />
  </div>;
};

export default Logo;
