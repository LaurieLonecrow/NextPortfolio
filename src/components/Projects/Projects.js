import { FaCode } from 'react-icons/fa';
import { BlogCard, SubTitle, ExternalLinks, GridContainer, TitleContent, HeaderThree, Hr, UtilityList, Img} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ScrollSlideUp from '../Transitions/SlideUp/SlideUpContainer';

const Projects = () => {
return (
  <Section id='projects'>
    
      <SectionDivider />
      
    <ScrollSlideUp>
      <SectionTitle main>Featured Projects</SectionTitle>
    </ScrollSlideUp>
      
    <GridContainer >
      {projects.map(({id, image, title, description, visit, source}) => (
        <BlogCard key={id} background={image} href={visit}> 
         <TitleContent>
          <SubTitle>{description}</SubTitle>
          <HeaderThree maintitle>{title}</HeaderThree>
          <Hr />
          <UtilityList>
            <ExternalLinks href={source}><FaCode/></ExternalLinks>
          </UtilityList>
        </TitleContent>
        </BlogCard>
        ))} 
    </GridContainer>
  </Section>
  );
};

export default Projects;