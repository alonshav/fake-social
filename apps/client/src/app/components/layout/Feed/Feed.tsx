import PostsList from '../../../features/Posts/PostsList/PostsList';
import { PostAdd } from '../../../features/Posts/PostAdd/PostAdd';
import { FeedStyled } from '../../../styles/Feed.styled';

const Feed = () => {
  return (
    <FeedStyled>
      <PostAdd />
      <PostsList />
    </FeedStyled>
  );
};

export default Feed;
