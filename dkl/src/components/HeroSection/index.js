import React, {useState} from 'react';                                                      
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import  { 
  HeroContainer, 
  HeroBg, 
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

                                                                                 
const HeroSection = () => {                                                    
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (                                                                    
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Landscaping made Easy</HeroH1>
        <HeroP>
          Sign up today and get a quote, customized to your land and job
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );     
 };                                                                               
                                                                               
export default HeroSection;
