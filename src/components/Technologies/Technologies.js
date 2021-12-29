import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
  <List>
    <ListItem>
      <DiReact size='3rem' />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Proficient with <br />
          HTML, CSS, Javascript, React.js, TypeScript
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size='3rem' />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.js, GraphQL, Postgres, MongoDB
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiZend size='3rem' />
      <ListContainer>
        <ListTitle>Ui/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
          tools like Figma, Sketch, Photoshop
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
