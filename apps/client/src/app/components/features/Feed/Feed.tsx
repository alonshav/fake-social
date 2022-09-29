import PostsProvider from '../Posts/PostsProvider';
import Posts from '../Posts/Posts';

const Feed = () => {
  return (
  <PostsProvider>
    <Posts/>
  </PostsProvider>
  )
};

export default Feed;
