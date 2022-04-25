import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, Image, ExternalLinks } from './HeroStyles';
import ScrollSlideUp from '../Transitions/SlideUp/SlideUpContainer';

const Hero = () => (
  <Section row nopadding>
    <Image alt="selfie"/>
    <LeftSection>
    <ScrollSlideUp>
      <SectionTitle >My name is Laurie Lonecrow.</SectionTitle>
      <SectionTitle>I am a software engineer at
      <ExternalLinks href="https://us.ippon.tech/">Ippon.us</ExternalLinks>and side-hustler 
      helping small businesses build an authentic web-presence.
      </SectionTitle>
    </ScrollSlideUp>
    </LeftSection>
  </Section>
);
export default Hero;