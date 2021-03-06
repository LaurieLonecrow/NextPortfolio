import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 2rem 1rem;
  
  @media ${(props) => props.theme.breakpoints.md} {
    background: ${props => props.theme.colors.background1};
    bottom: 0px;
    padding: 0;
    width: 100%;
    z-index: 21;
    -webkit-backface-visibility: hidden;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
    width: 100%;
  
  }
`;

// Social Icons 
export const SocialIcons = styled.a`
transition: 0.3s ease;
color: ${(props) => props.theme.colors.stroke};
border-radius: 50px;
padding: 32px 8px;

&:hover {
    background-color: ${(props) => props.theme.colors.button};
    transform: scale(1.2);
    cursor: pointer;
  }
`

export const ToolTip = styled.span`
position: absolute;
color: white;
width: 100%;
padding: 24px 16px;
margin: 8px;
border-radius: 50%;
background-color: #212d45;
width: min-content;
visibility: hidden;
`