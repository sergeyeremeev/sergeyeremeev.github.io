import styled from 'styled-components';
import themeColors from '../../helpers/theme-colors';

const SectionTitle = styled.h1`
  flex: 0 0 54px;
  color: ${themeColors.blue2};
  border-bottom: 3px solid ${themeColors.blue2};
  padding-bottom: 12px;
  margin: 0 0 50px;
  font-size: 32px;
  
  @media (max-width: 679px) {
    font-size: 24px;
    padding-bottom: 8px;
    border-bottom: 2px solid ${themeColors.blue2};
    margin: 0 0 30px;
  }
`;

export default SectionTitle;
