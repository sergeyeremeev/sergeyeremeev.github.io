import styled, { css } from 'styled-components';
import themeColors from '../../../helpers/theme-colors';

export const SkillSingleCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${props => props.transformation};
  width: 120px;
  height: 120px;
  margin: -60px;
  border-radius: 50%;
  background: ${themeColors.white};
  color: ${props => (props.selected ? themeColors.blue2 : themeColors.blue3)};
  text-align: center;
  font-size: 15px;
  padding: 15px;
  box-shadow: ${props => (props.selected ? 'rgba(81, 94, 121, 0.35) 4px 4px 10px 0' :
        props.hovered ? 'rgba(81, 94, 121, 0.35) 4px 4px 10px 0' : 'rgba(0, 0, 0, 0.15) 4px 4px 10px 0')};
  transition: box-shadow 0.3s linear;
  cursor: pointer;
  
  @media (max-width: 679px), (max-height: 700px) {
    position: relative;
    left: auto;
    top: auto;
    display: block;
    height: auto;
    max-height: ${props => (props.selected ? '1000px' : '50px')};
    text-decoration: none !important;
    transform: none;
    border-radius: 20px;
    margin: 0 0 20px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    transition: max-height 0.3s ease;
    will-change: max-height;
    
    &::after {
      content: '${props => (props.selected ? '\u2212' : '\u002B')}';
      position: absolute;
      right: 15px;
      top: 12px;
      color: ${props => (props.selected ? themeColors.blue2 : themeColors.blue3)};
      font-size: 30px;
      pointer-events: none;
      cursor: pointer;
      line-height: 21px;
    }
  }
`;

export const SkillMobileInfo = styled.div`
  display: none;
  
  @media (max-width: 679px), (max-height: 700px) {
    display: block;
    margin-top: 40px;
    font-size: 14px;
    line-height: 1.4;
    color: ${themeColors.gray2};
  }
`;
