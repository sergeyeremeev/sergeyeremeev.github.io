import { css } from 'styled-components';
import { SlidingUpContentCSS } from '../../helpers/slideContentOnScroll';

const WorkExperienceContainerCSS = css`
  display: flex;
  flex: 0 0 calc(100vh - 224px);
  height: calc(100vh - 224px);
  padding: 0 10px;
  ${SlidingUpContentCSS};
  
  @media (max-width: 1279px) {
    flex: 0 0 580px;
    height: 580px;
  }
  
  @media (max-width: 959px) {
    height: auto;
    flex: auto;
    display: block;
    padding: 0;
  }
  
  @media (max-width: 679px) {
    margin: 0 -20px;
  }
`;

export default WorkExperienceContainerCSS;
