import styled from 'styled-components';

export const RoundCornerButton = styled.button`
  margin-top: 2rem;
  border-radius: 50px;
  padding: 0;
  color: white;
  background-color: gray;
  border: none;
  font-size: 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.highlight};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.active};
  }

  cursor: pointer;

}
`;
