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
