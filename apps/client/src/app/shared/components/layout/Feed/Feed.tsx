import PostList from '../../../../features/Posts/PostsList/PostsList';
import { AddPost } from '../../../../features/Posts/PostAdd/AddPost';
import { FeedStyled } from '../../../../styles/Feed.styled';

const Feed = () => {
  return (
    <FeedStyled>
      <AddPost />
      <PostList />
    </FeedStyled>
  );
};

export default Feed;
