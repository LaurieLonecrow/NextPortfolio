import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call </LinkTitle>
          <LinkItem href='tel:111-111-1111'>Tel</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle> Call </LinkTitle>
          <LinkItem href='mailto:contact@email.com'>Email</LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Making things better
          </Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
    
  );
};

export default Footer;
