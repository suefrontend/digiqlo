import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  border-radius: 0.25rem;
  background-color: rgba(59, 130, 246, 1);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #fff;

  a {
    text-decoration: none;
    color: currentColor;
  }

  svg {
    margin-right: 0.25rem;
    width: 1.25rem;
  }
`;
