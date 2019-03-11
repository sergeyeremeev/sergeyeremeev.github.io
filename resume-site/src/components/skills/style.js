import styled from 'styled-components';
import { RotatedContentCSS } from '../../helpers/rotateContent';
import { SlidingUpContentCSS } from '../../helpers/slideContentOnScroll';

export const SkillsContainer = styled.div`
  position: relative;
  height: 660px;
  
  @media (max-width: 679px), (max-height: 700px) {
    height: auto;
  }
`;

export const SkillsRotator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  ${RotatedContentCSS};
  
  @media (max-width: 679px), (max-height: 700px) {
    position: static;
    ${SlidingUpContentCSS};
  }
`;
