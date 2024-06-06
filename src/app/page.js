"use client";
import styled from "styled-components";
import Hero from "@/components/hero";
import Headings from "@/components/headings";
import ServicesCard from "@/components/services_card";
import OurClinicSlider from "@/components/our_clinic_slider";
import TeamCArd from "@/components/team_card";
import Map from "@/components/map";

import Address from "@/components/address";

import FAQS from "@/components/faqs";
import SendUsInquiry from "@/components/send-us-inquiry";
import Partners from "@/components/partners";
import Link from "next/link";

const faqs = [
  {
    question: "How long has Klinik Menggatal been running for?",
    answer: "38 years. We have been running since 1986.",
  },
  {
    question: "What should I type on Waze to visit your clinic?",
    answer:
      "On Waze, just type 'Klinik Menggatal'. We are located at Lorong Pekan Menggatal 1.",
  },
  {
    question: "Do you have Instagram?",
    answer: (
      <>
        Yes, we do, and we are active there. Join our community{" "}
        <Link href="https://www.instagram.com/klinik_menggatal_dr_je/?igsh=d2d5MTB4ODlscWtp&fbclid=IwAR0KWxlpXu4HziZ2fN4W5UWU3jycYjn-dUG6Mb0_-peM5ydput94A-VThLk">
          <strong className="underline">HERE</strong>
        </Link>
        .
      </>
    ),
  },
  {
    question: "Do you accept new patients?",
    answer: "Yes, new patients are welcome!",
  },
];

export default function Home() {
  return (
    <main style={{ margin: "0 auto", background: "#1E1E1E" }}>
      <div id="home">
        <Hero />
      </div>
      <StyledServicesCardWrapper id="services">
        <Headings
          title="Our Services"
          description=" Welcome to our clinic, where your health and well-being come first. Since 1986, we've been dedicated to providing affordable healthcare for all. Our experienced and compassionate team offers a comprehensive range of medical services to meet your healthcare needs. Discover our services below and see how we can help you achieve optimal health."
        />
        <ServicesCard />
      </StyledServicesCardWrapper>
      <StyledClinicWrapper className="mt-10 pb-12">
        <Headings title="Our Clinic" />
        <OurClinicSlider />
      </StyledClinicWrapper>
      <div id="ourteam">
        <Headings
          title="Meet Our Team"
          description=" At our clinic, exceptional healthcare begins with an outstanding team. Our doctors, nurses, and support staff are not only highly skilled and experienced but also dedicated to delivering compassionate and personalized care to each patient. Meet the professionals who make our clinic a trusted healthcare provider in the community."
        />
        <TeamCArd />
      </div>
      <StyledContactUsWrapper id="contactus" className="py-10">
        <Headings title="Contact Us" />
        <StyledMapParent className="flex flex-col gap-3 items-center justify-center">
          <StyledMapWrapper>
            <Map />
            <Address />
          </StyledMapWrapper>
        </StyledMapParent>
      </StyledContactUsWrapper>
      <div id="faqs">
        <Headings title="FAQs" />
        <StyledFaqWrapper>
          {faqs.map((faq, index) => (
            <FAQS key={index} question={faq.question} answer={faq.answer} />
          ))}
        </StyledFaqWrapper>
      </div>
      {/* <div className="mt-20">
        <Headings title="Send Us An Inquiry" />
        <SendUsInquiry />
      </div> */}
      <div>
        <Headings title="Our Trusted Partners" />
        <Partners />
      </div>
    </main>
  );
}

const StyledServicesCardWrapper = styled.div`
  background-color: #1e1e1e;
  color: white;
`;
const StyledClinicWrapper = styled.div`
  background-color: #1e1e1e;
`;

const StyledMapParent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledMapWrapper = styled.div`
  min-width: 30%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;
const StyledFaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;
  color: white;
`;

const StyledContactUsWrapper = styled.div`
  background-color: #1e1e1e;
  color: white;
`;
