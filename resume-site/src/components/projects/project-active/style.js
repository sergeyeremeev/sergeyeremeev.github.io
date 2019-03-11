import styled from 'styled-components';
import themeColors from '../../../helpers/theme-colors';

export const ProjectDetails = styled.div`
  padding-right: 20px;
  color: ${themeColors.gray};
  font-size: 15px;
  
  strong,
  h4 {
    color: ${themeColors.green};
  }
  
  p,
  ul {
    line-height: 1.3;
  }
  
  a {
    text-decoration: underline;
    color: ${themeColors.green};
    
    &:hover {
      color: ${themeColors.gray};
    }
  }
`;

export const ProjectSummary = styled.div`
  display: flex;
  margin-bottom: 30px;
  
  div:last-child {
    margin-left: auto;
    
    strong {
      display: inline-block;
      width: 100%;
      text-align: right;
    }
    
    span {
      white-space: nowrap;
    }
  }
  
  @media (max-width: 679px) {
    flex-direction: column;
    
    div:first-child {
      margin-bottom: 15px;
    }
    
    div:last-child {
      margin-left: 0;
      
      strong {
        text-align: left;
      }
    }
  }
`;
