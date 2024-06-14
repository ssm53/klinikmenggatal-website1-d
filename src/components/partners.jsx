import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Partners = () => (
  <div className="pb-16">
    <Marquee className="my-8">
      <div className="px-20">
        <img
          src="./svgs/menggatal-uitm.png"
          width={270}
          height={270}
          alt="partner1"
        ></img>
      </div>
      <div className="px-20">
        <img
          src="./svgs/menggatal-sesb.jpeg"
          width={400}
          height={400}
          alt="partner2"
        ></img>
      </div>
      <div className="px-20">
        <img
          src="./svgs/menggatal-mitsubishi.jpeg"
          width={270}
          height={270}
          alt="partner3"
        ></img>
      </div>
      <div className="px-20">
        <img
          src="./svgs/menggatal-spa.png"
          width={270}
          height={270}
          alt="partner4"
        ></img>
      </div>
      <div className="px-20">
        <img
          src="./svgs/menggatal-sepanggar.jpeg"
          width={400}
          height={400}
          alt="partner5"
        ></img>
      </div>
    </Marquee>
  </div>
);

export default Partners;
