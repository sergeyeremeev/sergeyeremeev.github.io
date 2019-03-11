import styled from 'styled-components';

export const SectionWrapper = styled.section`
  height: 100%;
  background: ${props => (props.sectionBg ? props.sectionBg : '#fff')};
  padding: ${props => (props.sectionPadding ? props.sectionPadding : '60px 0')};
  
  @media (max-width: 767px) {
    padding: ${props => (props.sectionMobilePadding ? props.sectionMobilePadding : '30px 0')};
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  max-width: ${props => (props.containerMaxWidth ? props.containerMaxWidth : '1240px')};
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'column')};
  height: ${props => (props.height ? props.height : '100%')};
  
  @media (max-width: 767px) {
    padding: 0 20px;
  }
  
  @media (max-width: 679px) {
    flex-direction: column;
  }
`;
