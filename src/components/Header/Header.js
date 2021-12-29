import React from 'react';
import { GiBoomerangSun, GiAbstract014, GiAbstract015, GiAbstract032, GiAbstract041, GiAbstract077 } from 'react-icons/gi';
import { Container, Div1, SocialIcons, ToolTip} from './HeaderStyles';

const Header = () => (
  <Container id='home'>
    <Div1>
    <SocialIcons href='#home'><GiBoomerangSun size='3rem'/><ToolTip>Home</ToolTip></SocialIcons>
    <SocialIcons href='#projects'><GiAbstract014 size='3rem'/><ToolTip>Projects</ToolTip></SocialIcons>
    <SocialIcons href='#tech'><GiAbstract015 size='3rem'/><ToolTip>Tech</ToolTip></SocialIcons>
    <SocialIcons href='#timeline'><GiAbstract032 size='3rem'/><ToolTip>Timeline</ToolTip></SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/laurie-lay/'><GiAbstract041 size='3rem'/><ToolTip>LinkedIn</ToolTip></SocialIcons>
    <SocialIcons href='https://github.com/LaurieLonecrow'><GiAbstract077 size='3rem'/><ToolTip>GitHub</ToolTip></SocialIcons>
    </Div1>
  </Container> 
);
export default Header;
