import styled from 'styled-components'


export const ToggleButton = styled.button`
border: .5px solid ${props => props.theme.colors.stroke};
background: ${props => props.theme.colors.background1};
border-radius: 30px;
cursor: pointer;
display: flex;
justify-content: space-between;
padding: .4rem;
position: absolute;
right: 20px;
top 20px;
width: 8rem;
heigth: 4rem;
z-index: 2;

svg {
    color: ${props => props.theme.colors.stroke};
    height: auto;
    width: 2rem;
    transition: all 0.3s linear;

//     //sun
// &:first-child {
//     transform: ${({isDark}) => 'dark' ? 'translateY(0)' : 'translateY(100px)'};
// }  

//     //moon
// &:nth-child(2) {
//     transform: ${({isDark}) => 'dark' ? 'translateY(-100px)' : 'translateY(0)'};
// }
}

@media ${props => props.theme.breakpoints.sm} {
    top: 10px;
    left: 10px;
}
`;