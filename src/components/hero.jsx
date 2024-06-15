import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// instead of klnikmenggtatal logo, it used to be /svgs/edited.png'

const Hero = () => {
  return (
    <StyledSection className="bg-[url('/svgs/klinikmenggatal-logo.jpeg')] h-screen ">
      {/* <StyledHeadingContainer className="flex-col text-dark pt-5">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="font-normal text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl"
        >
          Affordable Healthcare
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl  xl:text-10xl"
        >
          FOR ALL
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.6,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="font-normal text-4xl sm:text-5xl md:text-5xl lg:text-6xl  xl:text-8xl"
        >
          Since 1986
        </motion.h2>
      </StyledHeadingContainer> */}
    </StyledSection>
  );
};

export default Hero;

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 5rem;
  background-repeat: no-repeat;
  /* background-image: url(""); */
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    align-items: center;
    padding-bottom: 0;
    height: 70vh;
  }
`;
const StyledHeadingContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  color: white;
  @media (max-width: 768px) {
    padding-left: 0;
  }
  h2 {
    line-height: 5.5rem;
    @media (max-width: 768px) {
      line-height: 1.5;
      padding-left: 5px;
    }
  }
`;
