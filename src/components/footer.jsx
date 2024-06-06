"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

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
              <div className="logo flex items-center">
                <h2 className="text-lg font-bold">
                  KLINIK DAN SURGERI HILLTOP
                </h2>
                {/* <img
                  src="/svgs/Logo.svg"
                  alt="Logo"
                  className="w-10 h-10 mr-2"
                /> */}
              </div>

              <p className="pt-8">Serving With Compassion & Care Since 1993.</p>
            </div>
          </StyledLogoWrapper>

          {/* Useful Links Section */}
          <StyledLFeaturesWrapper className="w-1/3 ">
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="list pt-6">
              <li className="font-semibold">
                <a href="#services" className="text-black">
                  Services
                </a>
              </li>
              <li className="pt-4 font-semibold">
                <a href="#ourteam" className="text-black">
                  Our Team
                </a>
              </li>
              <li className="pt-4 font-semibold">
                <a href="#contactus" className="text-black">
                  Contact Us
                </a>
              </li>
              <li className="pt-4 font-semibold">
                <a href="#faqs" className="text-black">
                  FAQs
                </a>
              </li>
            </ul>
          </StyledLFeaturesWrapper>

          {/* Social Media Section */}
          <StyledFollowusWrapper className="w-1/3 ">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="icons flex pt-8">
              <a href="https://www.facebook.com/p/Klinik-Dan-Surgeri-Hilltop-Sdn-Bhd-100079497984505/?locale=ms_MY">
                <FaFacebook className="w-8 h-8 mr-2" />
              </a>
              {/* <a href="#">
                <FaTwitter className="w-8 h-8 mr-2" />
              </a> */}
              {/* <a href="#">
                <FaLinkedin className="w-8 h-8 mr-2" />
              </a> */}
              {/* <a href="#">
                <FaInstagram className="w-8 h-8 mr-2" />
              </a> */}
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
