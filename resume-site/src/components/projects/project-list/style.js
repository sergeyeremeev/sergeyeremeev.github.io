import styled, { css } from 'styled-components';
import themeColors from '../../../helpers/theme-colors';

export const ProjectTileCSS = css`
  position: relative;
  display: block;
  border-radius: 7px;
  margin: -1px 0 0 -1px;
  text-align: center;
  overflow: hidden;
  background: ${themeColors.white};
  cursor: pointer;
  
  > div {
    position: relative;
    height: 108px;
    transition: border-color 0.15s linear;
    border: 1px solid ${themeColors.gray1};
  }
  
  img {
    max-width: 40%;
    max-height: 30%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 35%;
  }
  
  video {
    display: none;
  }
  
  h3 {
    position: absolute;
    width: calc(100% - 30px);
    top: 47%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    color: ${themeColors.gray2};
    line-height: 1.3;
  }
  
  &:hover {
    > div {
      border-color: ${themeColors.blue3} !important;
      z-index: 1;
    }
  }
  
  @media (max-width: 1279px) {
    width: calc(100% / 4);
  }
  
  @media (max-width: 767px) {
    width: calc(100% / 2);
  }
  
  @media (max-width: 479px) {
    width: 100%;
    
    > div {
      height: 150px;
    }
    
    h3 {
      font-size: 20px;
    }
    
    &:nth-child(n + 6) {
      display: ${props => (props.allVisible ? 'block' : 'none')};
    }
  }
`;
