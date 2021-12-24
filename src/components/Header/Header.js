import Link from 'next/link';
import React from 'react';
import { GiBoomerangSun, GiAbstract014, GiAbstract015, GiAbstract032, GiAbstract041, GiAbstract077 } from 'react-icons/gi';
import { Container, Div1, SocialIcons} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
    <SocialIcons href='https://google.com'><GiBoomerangSun size='3rem'/></SocialIcons>
    <SocialIcons href='https://google.com'><GiAbstract014 size='3rem'/></SocialIcons>
    <SocialIcons href='https://google.com'><GiAbstract015 size='3rem'/></SocialIcons>
    <SocialIcons href='https://google.com'><GiAbstract032 size='3rem'/></SocialIcons>
    <SocialIcons href='https://google.com'><GiAbstract041 size='3rem'/></SocialIcons>
    <SocialIcons href='https://google.com'><GiAbstract077 size='3rem'/></SocialIcons>
    </Div1>
  </Container> 
);
export default Header;
