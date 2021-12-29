import { FaCode } from 'react-icons/fa';
import { BlogCard, SubTitle, ExternalLinks, GridContainer, TitleContent, HeaderThree, Hr, UtilityList, Img} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
return (
  <Section id='projects'>
    <SectionDivider />
    <SectionTitle main>Featured Projects</SectionTitle>
    <GridContainer >
      {projects.map(({id, image, title, description, visit}) => (
        <BlogCard key={id} background={image}> 
         <TitleContent>
          <SubTitle>{description}</SubTitle>
          <HeaderThree maintitle>{title}</HeaderThree>
          <Hr />
          <UtilityList>
            <ExternalLinks href={visit}><FaCode/></ExternalLinks>
          </UtilityList>
        </TitleContent>
        {/* <Img src={image}/> */}
        </BlogCard>
        ))} 
    </GridContainer>
  </Section>
  );
};

export default Projects;