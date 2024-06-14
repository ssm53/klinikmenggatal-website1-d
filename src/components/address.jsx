import React from "react";
import styled from "styled-components";
import { FiMapPin, FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const Address = () => {
  return (
    <StyledWrapper className="pt-14 px-6 pb-5">
      <StyledAddressContainer className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">Malaysia</h2>
          <div className=" pt-4">
            <div className="flex items-center font-bold">
              <FiMapPin className="mr-2" size={20} />
              <p>Location</p>
            </div>
            <p>
              7, 1st Floor, Lorong Pekan Menggatal 1, Menggatal
              <br /> 88450, Kota Kinabalu, Sabah
            </p>
          </div>
          <div className="pt-6">
            <div className="flex items-center font-bold">
              <MdAccessTime className="mr-2" />
              <p>Opening Hours</p>
            </div>
            <p>Monday-Friday : 8AM - 1230PM, 2PM - 5PM</p>
            <p>Saturday : 8AM - 1230PM</p>
            <p>Sunday : Closed</p>
            <p>
              Public Holidays : We may be open. Please call/whatsapp us. Thanks!
            </p>
          </div>
          <div className="pt-6">
            <div className="flex items-center font-bold">
              <FiPhone className="mr-2" />
              <p>Phone</p>
            </div>
            <p>+601167486533</p>
          </div>
          <div className="pt-6">
            <div className="flex items-center font-bold">
              <FiMail className="mr-2" />
              <p>
                <a
                  href="mailto:klinikmenggatal@gmail.com"
                  className="blue-hover"
                >
                  Email
                </a>
              </p>
            </div>
            <a href="mailto:klinikX@gmail.com" className="blue-hover">
              klinikmenggatal@gmail.com
            </a>
          </div>
          <div className=" pt-6 ">
            <div className="flex items-center font-bold">
              <FaWhatsapp className="mr-2" />
              <p>
                <a href="https://wa.me/+61167486533" className="blue-hover">
                  WhatsApp
                </a>
              </p>
            </div>
            <a href="https://wa.me/+601167486533" className="blue-hover">
              +601167486533
            </a>
          </div>
        </div>
      </StyledAddressContainer>
    </StyledWrapper>
  );
};

export default Address;
const StyledWrapper = styled.div`
  width: 90%;
`;
const StyledAddressContainer = styled.div`
  margin: 0 auto;

  .blue-hover:hover {
    color: #007bff;
  }
`;
