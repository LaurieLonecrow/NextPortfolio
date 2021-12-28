
import { BlogCard, CardInfo, ExternalLinks, GridContainer, TitleContent, HeaderThree, Hr, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
return (
  <Section id='projects'>
    <SectionDivider />
    <SectionTitle main>Featured Projects</SectionTitle>
    <GridContainer >
      {projects.map(({id, image, title, description, source, visit}) => (
        <BlogCard key={id}> 
         <TitleContent>
          <HeaderThree maintitle>{title}</HeaderThree>
          <Hr />
          <CardInfo>{description}</CardInfo>
        </TitleContent>
        <Img src={image}/>
        <UtilityList>
          <ExternalLinks href={visit}>Code</ExternalLinks>
          <ExternalLinks href={source}>Source</ExternalLinks>
        </UtilityList>
        </BlogCard>
        ))} 
    </GridContainer>
  </Section>
  );
};

export default Projects;