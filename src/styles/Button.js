import styled from 'styled-components';

export const StyledBtn = styled.div`

  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

    a {
      padding: 20px;
      display: block;
      text-decoration: none;
    }

    &.primary {
      background: #4d79bc;

      a {
        color: #fff;
      }
    }

    &.gray {
      background: #ccc;

      a {
        color: #666;
      }
    }
    &.full-width {
      width: 100%;
    }

    @media only screen and (max-width:480px) {
      &.full-width:first-child {
        margin-bottom: 10px;
      }
    }
`;
export const Btn = styled.button`
  border-radius: 3px;
  padding: 15px 30px;
  border: none;
  cursor: pointer;

  &.gray {
    background: #ccc;
    color: #666;
  }
`;
export const StyledBtnArea = styled.div`

  margin: 20px 0;

  @media only screen and (max-width:480px) {
    display: flex;
    justify-content: center;
  }

`;
