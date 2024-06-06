"use client";
import styled from "styled-components";
import Hero from "@/components/hero";
import Headings from "@/components/headings";
import ServicesCard from "@/components/services_card";
import OurClinicSlider from "@/components/our_clinic_slider";
import TeamCArd from "@/components/team_card";
import Map from "@/components/map";
import MapTwo from "@/components/map2";
import MapThree from "@/components/map3";
import Address from "@/components/address";
import AddressTwo from "@/components/address2";
import AddressThree from "@/components/address3";
import FAQS from "@/components/faqs";
import SendUsInquiry from "@/components/send-us-inquiry";
import Partners from "@/components/partners";

const faqs = [
  {
    question: "Who owns all the branches of Klinik Dan Surgeri Hilltop?",
    answer:
      "Dr Jagajeet Singh is the owner of Klinik Dan Surgeri Hilltop, and all of its branches.",
  },
  {
    question: "How long has Klinik Dan Surgeri Hilltop been running for? ",
    answer: "We have been running for 31 years!",
  },
  {
    question: "How many branches do you have?",
    answer:
      "We have 3 branches - Hilltop, Donggongon and Kepayan. So, you don't have to travel far to see us!",
  },
  {
    question: "Do you accept new patients?",
    answer: "Yes, new patients are welcome!",
  },
  {
    question: "Do you provide X-Ray services?",
    answer: "Yes, we provide X-Ray services at our main branch in Hilltop!",
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
          description=" Welcome to our clinic, where your health and well-being are our top priorities. We offer a wide range of medical services to meet all your healthcare needs, delivered by a team of experienced and compassionate professionals. Explore our services below to see how we can support you on your journey to optimal health."
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
          description=" At our clinic, we believe that exceptional healthcare starts with an exceptional team. Our doctors, nurses, and support staff are not only highly skilled and experienced but also deeply committed to providing compassionate and personalized care to every patient. Get to know the professionals who make our clinic a trusted healthcare provider in the community."
        />
        <TeamCArd />
      </div>
      <StyledContactUsWrapper id="contactus" className="py-10">
        <Headings title="Contact Us" />
        <StyledMapParent className="flex gap-3 justify-center">
          <StyledMapWrapper>
            <Map />
            <Address />
          </StyledMapWrapper>
          <StyledMapWrapper>
            <MapTwo />
            <AddressTwo />
          </StyledMapWrapper>
          <StyledMapWrapper>
            <MapThree />
            <AddressThree />
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
