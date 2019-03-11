import styled from 'styled-components';
import { SlidingUpContentCSS } from '../../helpers/slideContentOnScroll';
import themeColors from '../../helpers/theme-colors';

export const ProjectsContainer = styled.div`
  ${SlidingUpContentCSS};
`;

export const ProjectsContainerInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, calc(100% / 6));
  padding: 0 10px 0 16px;
  
  @media (max-width: 1279px), (max-height: 699px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px 0 14px;
  }
  
  @media (max-width: 767px) {
    padding: 0 10px 0 12px;
  }
  
  @media (max-width: 479px) {
    padding: 0 10px;
  }
`;

export const ProjectsViewMore = styled.button`
  display: none;
  
  @media (max-width: 479px) {
    display: inline-block;
    float: right;
    color: ${themeColors.darkBlue};
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 20px;
    text-decoration: underline;
  }
`;

export const ProjectPreview = styled.div`
  grid-column: 3/5;
  grid-row: 2/4;
  position: relative;
  border: 8px solid #000;
  border-radius: 3px;
  margin: -1px;
  z-index: 3;
  
  img {
    width: 100%;
    max-height: 100%;
    z-index: 1;
  }
  
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 3px;
    border-radius: 3px;
    background: #a5adbd;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 3px;
    border-radius: 3px;
    background: #a5adbd;
  }
  
  @media (max-width: 1279px), (max-height: 699px) {
    display: none;
  }
`;

export const ProjectsHint = styled.span`
  display: block;
  margin-top: 30px;
  font-size: 1.2rem;
  font-style: italic;
  color: ${themeColors.gray2};
  
  @media (max-width: 479px) {
    font-size: 1rem;
  }
`;
