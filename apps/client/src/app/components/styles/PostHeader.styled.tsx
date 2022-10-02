import styled from 'styled-components';
import { CardHeader } from './CardHeader';

export const PostHeader = styled(CardHeader)`
  .followButton {
    &:hover {
      color: rgba(0, 0, 255, 0.66);
    }

    padding: 5px;
    font-size: 16px
  }

  .profilePicture {
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
  }

  .postDetails {
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    .userName {
      margin: 0;
      padding: 0;

      &:hover {
        cursor: pointer;
        color: rgba(0, 0, 255, 0.66);
      }
    }

    .userMoto {
      font-weight: 300;
      margin: 0;
      padding: 0;
    }

    .timePosted {
      font-size: 1rem;
      font-weight: 300;
    }
  }
`;
