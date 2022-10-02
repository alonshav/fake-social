import styled from 'styled-components';
import { CardContent } from './CardContent.styled';

export const PostContent = styled(CardContent)`
  .image-container {
    width: calc(100% + 2rem);
    overflow: hidden;

    img{
      padding: 0;
      width: 100%;
      height: auto;
      display: block;
    }
  }
 `
