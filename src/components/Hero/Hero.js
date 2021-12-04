import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Laurie Lonecrow
      </SectionTitle>
      <SectionText>
        This is going to be fun!
      </SectionText>
      <Button onClick={() => window.location = '/'}>
        Click Me
      </Button>
    </LeftSection>

  </Section>
);

export default Hero;