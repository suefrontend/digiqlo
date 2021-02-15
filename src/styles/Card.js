import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  a {
    display: block;
    height: 100%;
  }
`;

export const Title = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;

  a {
    color: currentColor;
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
