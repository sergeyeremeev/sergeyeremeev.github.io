import styled, { css } from 'styled-components';
import themeColors from '../../helpers/theme-colors';
import atSign from '../../assets/images/at-sign.svg';
import linkedIn from '../../assets/images/logo-linkedin-filled.svg';
import iconMobile from '../../assets/images/mobile-phone-portrait.svg';
import skype from '../../assets/images/skype.svg';

export const WebsiteFooter = styled.footer`
  height: 100%;
  padding: 40px 0;
  background: linear-gradient(${themeColors.blue2}, ${themeColors.blue3});
  display: flex;
  align-items: center;
  
  @media (max-width: 767px) {
    padding: 30px 0;
    
    > div {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      max-height: 500px;
    }
  }
`;

export const FooterSection = styled.div`
  &:last-child {
    margin-left: auto;
  }
  
  h2 {
    color: ${themeColors.white};
    font-size: 28px;
    font-weight: 300;
    text-transform: uppercase;
    margin: 0 0 36px;
    text-shadow: rgba(0, 0, 0, 0.5) 0 2px 2px;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    color: ${themeColors.white};
  }
  
  li {
    margin-bottom: 14px;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 767px) {
    text-align: center;
    
    &:last-child {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`;

export const ContactOptions = styled.div`
  color: ${themeColors.white};
  
  div {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  a {
    text-decoration: underline;
    display: flex;
    align-items: center;
  }
  
  @media (max-width: 767px) {
    div {
      justify-content: center;
    }
  }
`;

const IconCSS = css`
  display: block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
`;

export const EmailIcon = styled.i`
  ${IconCSS};
  background: url(${atSign});
  background-size: 100% 100%;
`;

export const MobileIcon = styled.i`
  ${IconCSS};
  background: url(${iconMobile});
  background-size: 100% 100%;
`;

export const SkypeIcon = styled.i`
  ${IconCSS};
  background: url(${skype});
  background-size: 100% 100%;
`;

export const LinkedInIcon = styled.i`
  ${IconCSS};
  background: url(${linkedIn});
  background-size: 100% 100%;
`;
