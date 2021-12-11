import Link from 'next/link';
import React from 'react';
import { GiBoomerangSun, GiAbstract014, GiAbstract015, GiAbstract032, GiAbstract041, GiAbstract077 } from 'react-icons/gi';


import { Container, Logo, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Logo>
      <Link href="/" passHref>
        <a style={{display: 'flex', alignItems:'center', color: 'white', marginBottom:'20px'}}>
          {/* <GiBoomerangSun size='3rem'/> <Span>LoneCrow Portfolio</Span> */}
        </a>
      </Link>
    </Logo>
    <Div3>
    <SocialIcons href='https://google.com'>
        <GiBoomerangSun size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://google.com'>
        <GiAbstract014 size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://google.com'>
        <GiAbstract015 size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://google.com'>
        <GiAbstract032 size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://google.com'>
        <GiAbstract041 size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://google.com'>
        <GiAbstract077 size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
  
);

export default Header;
