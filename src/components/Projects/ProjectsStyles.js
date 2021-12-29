import styled from 'styled-components';

export const Img = styled.img`
  width: 60%;
  filter: grayScale(100%);
  object-fit: cover;
  overflow: hidden;

  &:hover {
    filter: grayScale(0%);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 80%;
  }
`

export const GridContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  width: 100%;
}
`
export const BlogCard = styled.div`
  filter: grayScale(100%);
  text-align: center;
  padding: 2rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
  &:hover {
    filter: grayScale(0%);  
    transform: scale(1.02);

  }

  @media ${(props) => props.theme.breakpoints.sm} {
    background-size: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: url(${(props) => props.background}) no-repeat center center; 
    background-size: cover;
    opacity: .5;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.maintitle ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px 0;
  border: 0;
  background: #d0bb57;
`;

// export const Intro = styled.div`
//   width: 170px;
//   margin: 0 auto;
//   color: #dce3e7;
//   font-family: 'Droid Serif', serif;
//   font-size: 13px;
//   font-style: italic;
//   line-height: 18px;
// `;


export const SubTitle = styled.p`
  padding: 0 50px;
  color: #e4e6e7;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 24px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: .3rem;
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
border: 2px solid #E9C46A;
color: white;
font-size: 2rem;
padding: 1.2rem 1.5rem;
background: transparent;
border-radius: 50%;
transition: 0.5s;
&:hover {
  background-color: #212d45;
  transform: scale(1.2);
  cursor: pointer;
}
`;
