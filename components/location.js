import React from "react";
import Image from "next/image"
import l_image from "../assets/Ellipse_310.png"
const Location = () => {
  return <div className="logo">
    {/* Fintract Global */}
    <Image
      src={l_image}
      height={50}
    />
  </div>;
};

export default Location;

