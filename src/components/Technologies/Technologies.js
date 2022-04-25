import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListIcon, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import ScrollSlideUp from '../Transitions/SlideUp/SlideUpContainer';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <ScrollSlideUp>
      <SectionTitle main>Technologies</SectionTitle>
    </ScrollSlideUp>
    <ScrollSlideUp>  
     <List>
      <ListItem>
       <ListIcon><DiReact size='4rem' /></ListIcon>
        <ListContainer>
         <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          Proficient with <br />
          HTML, CSS, Javascript, React.js, TypeScript, Vue.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
       <ListIcon><DiFirebase size='4rem' /></ListIcon>
        <ListContainer>
         <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          Experience with <br />
          Node.js, GraphQL, Postgres, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
       <ListIcon><DiZend size='4rem' /></ListIcon>
        <ListContainer>
         <ListTitle>Ui/UX</ListTitle>
          <ListParagraph>
          Experience with <br />
          tools like Figma, Sketch, Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
   </ScrollSlideUp>
  </Section>
);
export default Technologies;
