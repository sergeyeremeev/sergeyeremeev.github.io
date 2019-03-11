import styled, { keyframes } from 'styled-components';
import themeColors from '../../helpers/theme-colors';
import me from '../../assets/images/me.jpg';
import mePortrait from '../../assets/images/me_portrait.jpg';
import resumeIcon from '../../assets/images/resume.png';
import contactIcon from '../../assets/images/contact.png';

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  background: ${themeColors.blue1};
  overflow: hidden;
  
  @media (max-width: 1279px) {
    flex-direction: column;
  }
`;

const reveal = keyframes`
  to {
    stroke-dashoffset: 500;
  }
`;

const borderAppear = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const HeaderPhotoMobile = styled.div`
  display: none;
  background: url(${mePortrait}) no-repeat;
  background-size: 100% 100%;
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 70px auto 0;
  flex-shrink: 0;
  
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    
    &.photo-reveal circle {
      stroke-dasharray: 500;
      stroke-dashoffset: 0;
    }
    
    &.photo-border circle {
      stroke-dasharray: 500;
      stroke-dashoffset: 500;
    }
  }
  
  &.loaded svg {
    &.photo-reveal circle {
      animation: ${reveal} 2s linear forwards;
    }
    
    &.photo-border circle {
      animation: ${borderAppear} 1s 2s linear forwards;
    }
  }
  
  @media (max-width: 1279px) {
    display: flex;
  }
  
  @media (max-width: 479px) {
    margin-top: 40px;
  }
`;

export const HeaderPhoto = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  
  img {
    transform: translateX(100vw);
    will-change: transform;
    width: 10%;
    height: 10%;
  }
  
  &.tiles-ready > img {
    transform: translateX(0);
  }
  
  &.animation-finished {
    background: url(${me}) no-repeat;
    background-size: 100% 100%;
    
    > img {
      display: none;
    }
  }
  
  @media (max-width: 1279px) {
    display: none;
  }
`;

export const HeaderPhotoMask = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: calc(100% + 1px);
  height: 100%;
  background: linear-gradient(to left, ${themeColors.blue1} 0%, transparent 20%);
  box-shadow: inset -33px 0px 65px ${themeColors.blue1};
`;

export const HeaderContent = styled.div`
  flex: 1 1 auto;
  padding-top: 100px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 1279px) {
    flex: 1 1 auto;
    padding-top: 40px;
  }
  
  @media (max-width: 679px) {
    padding-top: 25px;
  }
`;

export const SlideOutText = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 0 60px;
  transform: translateY(50px);
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.4s linear;
  
  &.slide-out {
    transform: translateY(0);
    opacity: 1;
  }
  
  @media (max-height: 767px) {
    margin: 0 0 30px;
  }
  
  @media (max-width: 767px) {
    font-size: 2.4rem;
  }
  
  @media (max-width: 639px) {
    font-size: 2rem;
  }
  
  @media (max-width: 479px) {
    font-size: 1.8rem;
    margin: 0 0 20px;
  }
`;

const borderBlink = keyframes`
  0% {
    border-color: transparent;
  }
  
  50% {
    border-color: transparent;
  }
  
  51% {
    border-color: #fff;
  }
  
  100% {
    border-color: #fff;
  }
`;

export const TypedText = styled.h2`
  color: #fff;
  font-size: 3.6rem;
  font-weight: 300;
  visibility: hidden;
  display: inline-block;
  margin: 0 0 80px;
  padding: 0 20px;
  width: 100%;
  text-align: center;

  &.visible {
    visibility: visible;
  }

  span {
    font-size: inherit;
    border-right: 1px solid #fff;
    animation: ${borderBlink} 1s infinite;
    //white-space: nowrap;
  }
  
  @media (max-height: 767px) {
    margin: 0 0 40px;
  }
  
  @media (max-width: 1919px) {
    font-size: 3.2rem;
  }
  
  @media (max-width: 1399px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 1399px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 1279px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 767px) {
    font-size: 2.4rem;
  }
  
  @media (max-width: 639px) {
    font-size: 2rem;
  }
  
  @media (max-width: 479px) {
    font-size: 1.6rem;
    margin: 0 0 30px;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  transform: translateY(50px);
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.4s linear;

  &.slide-out {
    transform: translateY(0);
    opacity: 1;
  }
  
  > * {
    position: relative;
    flex: 0 0 200px;
    border: 1px solid ${themeColors.blue3};
    color: #fff;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 25px;
    overflow: hidden;
    transition: 0.3s border-color ease-in-out;
    
    span {
      transition: transform 0.4s ease-in-out;
    }
    
    &::before {
      content: '';
      width: 25px;
      height: 25px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(calc(-100% - 25px), -50%);
      transition: transform 0.4s ease-in-out;
    }
    
    &:hover {
      border-color: ${themeColors.blue2};
    
      span {
        transform: translateX(125px);
      }
      
      &::before {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }
  
  a::before {
    background: url(${resumeIcon}) no-repeat;
    background-size: 100% 100%;
  }
  
  button::before {
    background: url(${contactIcon}) no-repeat;
    background-size: 100% 100%;
  }
  
  @media (max-width: 1279px) {
    width: 440px;
  }
  
  @media (max-width: 639px) {
    width: 360px;
  
    > * {
      flex: 0 0 160px;
    }
  }
  
  @media (max-width: 679px) {
    width: 100%;
    flex-direction: column;
  
    > * {
      flex: 0 0 40px;
      font-size: 0.8rem;
      width: 200px;
      margin: 0 auto;
      
      &::before {
        width: 22px;
        height: 22px;
      }
    }
    
    a {
      margin-bottom: 20px;
    }
  }
`;

const arrowJump = keyframes`
  0% {
    transform: translateY(20px);
  }
  
  50% {
    transform: translateY(0);
  }
  
  100% {
    transform: translateY(20px);
  }
`;

export const HeaderArrow = styled.div`
  opacity: 0;
  transition: opacity 0.5s linear;
  font-size: 4rem;
  margin: auto 0 50px;
  cursor: pointer;
  animation: ${arrowJump} 1s infinite;
  
  &.visible {
    opacity: 1;
  }
  
  @media (max-width: 679px), (max-height: 679px) {
    font-size: 3rem;
    margin-top: 0;
  }
`;
