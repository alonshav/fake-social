import styled from 'styled-components';

export const StyledProfilePicture = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }

  img {
    max-height: 100%;
    width: auto;
    display: block;
  }
`;

