import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 2rem 1rem;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// Social Icons 
export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 32px 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`