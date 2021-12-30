import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, Image } from './HeroStyles';
import ScrollSlideUp from '../Transitions/SlideUp/SlideUpContainer';

const Hero = () => (
  <Section row nopadding>
    <Image alt="selfie"/>
    <LeftSection>
    <ScrollSlideUp>
      <SectionTitle >My name is Laurie Lonecrow.</SectionTitle>
      <SectionTitle >
      I am a software engineer and web developer 
      helping startups and small businesses build an authentic 
      web presence.
      </SectionTitle>
    </ScrollSlideUp>
    </LeftSection>
  </Section>
);
export default Hero;