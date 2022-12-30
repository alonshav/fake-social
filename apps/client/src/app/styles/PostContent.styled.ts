import styled from 'styled-components';
import { CardContent } from './CardContent.styled';

export const PostContent = styled(CardContent)`
  .image-container {
    display: flex;
    flex-direction: column;
    width: calc(100% + 2rem);
    overflow: hidden;

    img {
      padding: 0;
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .text-container {
    width: 100%;
  }
  .post-title{
    width: 100%;
    padding: 0;
    margin: 1.5rem 0 0 0;
  }
  &:hover{
    cursor: pointer;
  }
`;
