import styled, { css } from 'styled-components';
import themeColors from '../../helpers/theme-colors';

export const OverlayCSS = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 99;
  display: flex;
  visibility: ${props => (props.overlayActive ? 'visible' : 'hidden')};
  opacity: ${props => (props.overlayActive ? '1' : '0')};
  transition: ${props => (props.overlayActive ?
        'visibility 0s, opacity 0.3s linear' :
        'visibility 0s 0.3s, opacity 0.3s linear')};
  align-items: center;
  justify-content: center;
`;

export const OverlayContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 40px);
  max-width: 768px;
  height: calc(100vh - 40px);
  max-height: 600px;
  background: ${themeColors.beige};
  border-radius: 8px;
  padding: 60px 40px 40px;
  overflow: hidden;
  
  h2 {
    margin-top: 0;
    font-size: 28px;
    color: ${themeColors.darkBlue};
    
    &:hover {
      color: ${themeColors.gray};
    }
    
    span {
      font-size: 15px;
      font-weight: 300;
      
      @media (max-width: 767px) {
        display: block;
      }
    }
  }
  
  @media (max-width: 679px) {
    padding: 40px 20px 20px;
  }
`;

export const OverlayCloseBtn = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  color: ${themeColors.darkGray};
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  
  img {
    width: 16px;
    height: auto;
  }
  
  @media (max-width: 679px) {
    top: 20px;
    right: 20px;
  }
`;

export const ScrolledTextContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;
