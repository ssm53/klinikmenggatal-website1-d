import React from "react";
import styled from "styled-components";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamCardList = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);
  const cardsData = [
    {
      title: "Dr Je Chin Zen",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/test-team-drje.png",
    },
    {
      title: "Dr Joan John",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/test-team-drjoan.png",
    },
    {
      title: "Shirley Pan",
      subtitle: " ",
      tracks: "Strive for Excellence",
      imageUrl: "./svgs/test-team-nurse1.png",
    },
    {
      title: "Anne Ben",
      subtitle: " ",
      tracks: "Do what makes you happy",
      imageUrl: "./svgs/test-team-nurse2.png",
    },
    {
      title: "⁠Heazhel Erica",
      subtitle: " ",
      tracks: "Cherish everyday, be grateful always",
      imageUrl: "./svgs/test-team-nurse3.png",
    },
    // {
    //   title: "Dr John Doe",
    //   subtitle: "MBBS, Mangalore",
    //   tracks:
    //     "I love to save lives and that gives me passion to wake up every morning",
    //   imageUrl: "./svgs/team-nurse4.png",
    // },
    // {
    //   title: "Dr John Doe",
    //   subtitle: "MBBS, Mangalore",
    //   tracks:
    //     "I love to save lives and that gives me passion to wake up every morning",
    //   imageUrl: "./svgs/team7.jpg",
    // },
    // {
    //   title: "Dr John Doe",
    //   subtitle: "MBBS, Mangalore",
    //   tracks:
    //     "I love to save lives and that gives me passion to wake up every morning",
    //   imageUrl: "./svgs/team8.jpg",
    // },
  ];

  return (
    <StyledCardWrapper
      className="grid grid-cols-2 md:grid-cols-4 gap-4  py-6 "
      ref={ref}
    >
      {cardsData.map((card, index) => (
        <AnimatedCard
          key={index}
          // ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <StyledCard className="py-4 pb-0 px-4 flex-col items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              // src={card.imageUrl}
              src={card.imageUrl}
              width={270}
            />
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold pt-2">{card.title}</p>
              <p className="text-tiny uppercase font-bold pt-2">
                {card.subtitle}
              </p>
              <small className="text-default-500 pt-2">{card.tracks}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </StyledCard>
        </AnimatedCard>
      ))}
    </StyledCardWrapper>
  );
};

export default TeamCardList;

const StyledCard = styled(Card)`
  background-color: #f4f8ff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  padding: 16px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCardWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const AnimatedCard = styled(motion.div)`
  opacity: 0;
`;
