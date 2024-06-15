"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/svgs/klinikmenggatal-logo.jpeg";

const Footer = () => {
  return (
    <div className="bg-gray-200" style={{ width: "100%" }}>
      <footer
        className="bg-gray-200 py-8"
        style={{ width: "90%", margin: "0 auto" }}
      >
        <StyledWrapper className="flex justify-between mx-auto">
          <StyledLogoWrapper className="w-1/3">
            <div className="flex flex-col justify-start">
              <div className="logo flex flex-col items-center">
                <Image src={Logo} alt="Logo" width={70} height={70} />
                <h2 className="text-lg font-bold pt-4 text-[#8b53ff]">
                  KLINIK MENGGATAL
                </h2>
                {/* <img
                  src="/svgs/Logo.svg"
                  alt="Logo"
                  className="w-10 h-10 mr-2"
                /> */}
                {/* <p className="pt-8">Affordable Healthcare For All.</p> */}
              </div>

              {/* <p className="pt-8">Affordable Healthcare For All.</p> */}
            </div>
          </StyledLogoWrapper>

          {/* Useful Links Section */}
          <StyledLFeaturesWrapper className="w-1/3 ">
            <h3 className="text-lg font-bold mb-4 text-[#8b53ff]">Features</h3>
            <ul className="list pt-6">
              <li className="font-semibold">
                <a href="#services" className="text-[#8b53ff]">
                  Services
                </a>
              </li>
              <li className="pt-4 font-semibold">
                <a href="#ourteam" className="text-[#8b53ff]">
                  Our Team
                </a>
              </li>
              <li className="pt-4 font-semibold">
                <a href="#contactus" className="text-[#8b53ff]">
                  Contact Us
                </a>
              </li>
              <li className="pt-4 font-semibold">
                <a href="#faqs" className="text-[#8b53ff]">
                  FAQs
                </a>
              </li>
            </ul>
          </StyledLFeaturesWrapper>

          {/* Social Media Section */}
          <StyledFollowusWrapper className="w-1/3 ">
            <h3 className="text-lg font-bold mb-4 text-[#8b53ff]">Follow Us</h3>
            <div className="icons flex pt-8">
              <a href="https://www.facebook.com/profile.php?id=100093680283881">
                <FaFacebook className="w-8 h-8 mr-2 text-[#8b53ff]" />
              </a>
              <a href="https://www.tiktok.com/@klinik_menggatal_dr_je?_t=8nCGR0VRdEl&_r=1">
                <FaTiktok className="w-8 h-8 mr-2 text-[#8b53ff]" />
              </a>
              {/* <a href="#">
                <FaTwitter className="w-8 h-8 mr-2" />
              </a> */}
              {/* <a href="https://www.tiktok.com/@klinik_menggatal_dr_je?_t=8nCGR0VRdEl&_r=1">
                <FaLinkedin className="w-8 h-8 mr-2" />
              </a> */}
              <a href="https://www.instagram.com/klinik_menggatal_dr_je/?fbclid=IwAR1_GtcrqYAd8l-u7ymLKdFHPn2dlSjfZrCJedPk2V_MgkNqeee2pr0DMXY">
                <FaInstagram className="w-8 h-8 mr-2 text-[#8b53ff]" />
              </a>
            </div>
          </StyledFollowusWrapper>
        </StyledWrapper>
      </footer>
    </div>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledLogoWrapper = styled.div`
  width: 30%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    .logo {
      display: flex;
      justify-content: center;
    }
  }
`;
const StyledLFeaturesWrapper = styled.div`
  width: 20%;
  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
    ul {
      padding: 0;
    }
    h3 {
      padding-top: 1rem;
    }
  }
`;
const StyledFollowusWrapper = styled.div`
  text-align: start;
  width: 20%;
  .icons {
    display: flex;
    justify-content: start;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    h3 {
      padding-top: 1rem;
    }
    .icons {
      display: flex;
      justify-content: center;
    }
  }
`;
