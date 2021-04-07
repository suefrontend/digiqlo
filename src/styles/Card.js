import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -30px;

  @media only screen and (max-width: 480px) {
    align-items: center;
  }
`;

export const StyledCard = styled.div`

  width: calc(25% - 30px * 3 / 4);
  margin: 0 30px 30px 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;

  @media only screen and (min-width: 1281px) {
    :nth-child(4n+4){
      margin-right:0;
    }
  }

  @media only screen and (min-width: 768px) and  (max-width: 1280px) {
    width: calc(33.3333% - 30px * 2 / 3);

    :nth-child(3n){
      margin-right:0;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 767px) {
    width: calc(50% - 30px / 2);

    :nth-child(2n+2){
      margin-right:0;
    }
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
    margin: 0 auto 30px auto;
  }

`;
export const StyledCardFigure = styled.figure`

  width: 100%;
  height: auto;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media only screen and (max-width: 480px) {
    height: 160px;
  }
`;
export const StyledCardBody = styled.div`

  padding: 20px;

  h3 {
    margin: 0;
    font-weight: normal;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }

`;
