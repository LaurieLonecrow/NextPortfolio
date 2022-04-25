import styled from 'styled-components';

export const Image = styled.div`
background-image: url("https://res.cloudinary.com/lonecrow/image/upload/v1637076089/Portfolio/IMG_4658_woecm2.jpg");
background-size: cover;
background-repeat: no-repeat;
border-radius: 50%;
width: 400px;
height: 400px;
filter: grayscale(100%);
margin-top: auto;
margin-bottom: auto;

&:hover {
  filter: grayScale(0%);  
  transform: scale(1.02);

}

@media ${(props) => props.theme.breakpoints.sm} {
  margin: auto;

}
@media ${(props) => props.theme.breakpoints.md} {
  margin: auto;
}
`;

export const LeftSection = styled.div`
  width: 70%;
  padding: 80px 0 100px 30px;
  margin-top: auto;
  margin-bottom: auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70%;
    padding: 10px;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ExternalLinks = styled.a`
color: white;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.stroke};
  -webkit-text-stroke-width: 2px;
  white-space: normal;
font-weight: 800;
font-size: ${(props) => props.main ? '65px' : '56px'};
line-height: ${(props) => props.main ? '72px' : '56px'};
padding: 1.2rem 1.5rem;
background: transparent;
transition: 0.5s;
z-index:2;
&:hover {
  transition: color .4s ease,-webkit-text-stroke-color .4s ease;
  transform: scale(1.2);
  cursor: pointer;
}
`;
