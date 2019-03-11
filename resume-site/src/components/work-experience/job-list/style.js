import styled, { css } from 'styled-components';
import themeColors from '../../../helpers/theme-colors';

export const JobList = styled.div`
  height: 100%;
  width: 40%;
  align-self: flex-start;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(#fff 10%, transparent 60%);
    z-index: 99;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(transparent 10%, #fff 60%);
    z-index: 99;
    pointer-events: none;
  }
  
  @media (max-width: 959px) {
    width: 100%;
    display: block;
    height: 300px;
    margin-bottom: 30px;
    
    &::before,
    &::after {
      content: none;
    }
  }
  
  @media (max-width: 679px) {
    margin-bottom: 0;
  }
  
  @media (max-width: 400px) {
    height: 260px;
  }
`;

export const JobPreviewCSS = css`
  position: relative;
  height: 250px;
  width: calc(100% - 32px);
  margin: 0 16px;
  padding: 15px 0;
  border-radius: 4px;
  color: #fff;
  display: flex;
  cursor: pointer;
  
  > div {
    position: relative;
    width: 100%;
    height: 100%;
    transform: ${props => ((props.active || props.hovered) ? 'rotateY(180deg)' : 'rotateY(0)')};
    transition: transform 0.4s ease-in-out;
    box-shadow: 4px 4px 24px rgba(10, 10, 10, 0.35);
    transform-style: preserve-3d;
  }
  
  @media (max-width: 959px) {
    height: 300px;
    width: 400px;
  }
  
  @media (max-width: 679px) {
    margin: 0;
    width: 100%;
    padding: 15px 5px;
  }
  
  @media (max-width: 400px) {
    height: 260px;
  }
`;

export const JobPreviewImageCSS = css`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  backface-visibility: hidden;
  border: 3px solid #fff;
  border-radius: 6px;
  
  img {
    max-width: 80%;
    max-height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
  }
  
  span {
    position: absolute;
    color: #fff;
    width: 100%;
    padding: 0 15px;
    text-align: center;
    transform: translate(0, 20px);
    letter-spacing: 1px;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${themeColors.blue4};
    border-radius: 6px;
    opacity: 0.75;
  }
  
  @media (max-width: 619px) {
    background-size: auto 50%;
    
    &::after {
      opacity: 0.92;
    }
  }
`;

export const JobPreviewCTA = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: 66.666666%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${themeColors.white};
  box-shadow: inset 140px -34px ${themeColors.blue4};
  border: 1px solid ${themeColors.blue3};
  padding: 6px 24px;
  opacity: 0.75;
  
  @media (max-width: 679px) {
    display: block;
  }
`;

export const JobPreviewTextCSS = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  transform: rotateY(180deg);
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid ${themeColors.blue3};
  backface-visibility: hidden;
`;

export const JobPreviewContentTop = styled.div`
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  color: ${themeColors.blue1};
  text-shadow: rgba(0, 0, 0, 0.5) 0 2px 7px;
  font-size: 22px;
  line-height: 16px;
  
  h3 {
    font-size: 18px;
    margin: 0;
  }
  
  h2 {
    font-size: 20px;
    line-height: 1.4;
    margin: 6px 0 0;
  }
  
  @media (max-width: 1023px) {
    line-height: 12px;
  }
  
  @media (max-width: 959px) {
    line-height: 10px;
    font-size: 18px;
    
    h3 {
      font-size: 14px;
      margin-top: 0;
      line-height: 1.2;
    }
    
    h2 {
      font-size: 16px;
      line-height: 1.2;
    }
  }
  
  @media (max-width: 679px) {
    line-height: 6px;
    font-size: 16px;
    
    h3 {
      font-size: 12px;
    }
    
    h2 {
      font-size: 14px;
    }
  }
  
  @media (max-width: 619px) {
    line-height: 10px;
    font-size: 20px;
    
    h3 {
      font-size: 14px;
    }
    
    h2 {
      font-size: 18px;
    }
  }
`;

export const JobPreviewContentBottom = styled.div`
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: 100%;
  text-align: center;
  flex-direction: row;
  margin: auto 0 0;
  font-size: 14px;
  color: ${themeColors.blue2};
  
  span {
    display: block;

    &:last-child {
      margin-left: auto;
    }
  }
  
  @media (max-width: 679px) {
    font-size: 12px;
  }
`;
