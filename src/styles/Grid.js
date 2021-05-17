import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  margin: 0 0 20px 0;

  @media only screen and (max-width:480px) {
    flex-direction: column;
    margin: 0;
  }
`;
export const StyledRowItem = styled.div`
  width: 50%;
  box-sizing: border-box;

  &:first-child {
    margin-right: 20px;
  }

  @media only screen and (max-width:480px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
