import styled, { css, keyframes } from 'styled-components'

const slide = keyframes`
from {
    opacity: 0;
    transform: translateY(10px);
}
to {
    opacity: 1;
    transform: translateY(0px);
}
`;

const animation = props =>
css`${slide} 2s linear;`

export const SlideUp = styled.div`
animation: ${animation};
`;

export const NoSlide = styled.div`
`;