import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
          <LinkItem href='mailto:laurieteresa@gmail.com'>Shoot me an Email</LinkItem>
    </FooterWrapper>
  );
};

export default Footer;
