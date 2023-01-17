import React, { useState } from "react";
import Video from "../../videos/videos.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrappper,
  ArrowForward,
  ArrowRight,
  Overlay,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <Overlay></Overlay>
      <HeroContent>
        <HeroH1>A space for every computer Science Student</HeroH1>
        <HeroP>Sign up to join our community</HeroP>
        <HeroBtnWrappper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Sign Up {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrappper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
