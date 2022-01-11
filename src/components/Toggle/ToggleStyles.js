import styled, { css, keyframes } from 'styled-components'

const moonUp = keyframes`
from {
    opacity: 0;
    transform: translateY(0px);
}
to {
    opacity: 1;
    transform: translateY(-10px);
}
`;

const sunDown = keyframes`
from {
    opacity: 0;
    transform: translateY(10px);
}
to {
    opacity: 1;
    transform: translateY(0px);
}
`;

const animateMoon = props =>
css`${moonUp} .3s linear;`

const animateSun = props =>
css`${sunDown} .3s linear;`

export const ToggleButton = styled.button`
border: .5px solid ${props => props.theme.colors.stroke};
background: ${props => props.theme.colors.background1};
border-radius: 30px;
cursor: pointer;
display: flex;
justify-content: space-around;
padding: .2rem;
position: absolute;
right: 20px;
top 20px;
width: 6rem;
heigth: 4rem;
z-index: 2;

svg {
    color: ${props => props.theme.colors.stroke};
    height: auto;
    width: 2rem;

    //sun
&:first-child {
     animation: ${animateSun};  
}  

    //moon
&:nth-child(2) {
    animation: ${animateMoon};  
}
}

@keyframes ColorMode {

}

@media ${props => props.theme.breakpoints.sm} {
    top: 10px;
    left: 10px;
}
`;