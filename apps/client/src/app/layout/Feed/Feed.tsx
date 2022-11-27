import PostList from '../../features/Posts/PostsList/PostsList';
import { AddPost } from '../../features/Posts/PostAdd/AddPost';
import { StyledFeedStyled } from '../../styles/Feed.styled';

const Feed = () => {
  return (
    <StyledFeedStyled>
      <AddPost />
      <PostList />
    </StyledFeedStyled>
  );
};

export default Feed;
