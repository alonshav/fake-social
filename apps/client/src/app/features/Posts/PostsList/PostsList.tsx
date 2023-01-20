import React, { useEffect } from 'react';
import Post from '../Post/Post';
import { StyledPostsList } from '../../../styles/Posts.styled';
import { useAppSelector } from '../../../store/useAppSelector';
import { fetchPosts, selectAllPosts } from '../../../store/posts/posts.slice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { FetchingStatus } from '@types';


function PostsList() {

  const navigate = useNavigate();
  const posts = useAppSelector(selectAllPosts);
  const dispatch = useAppDispatch();

  const postStatus = useAppSelector((state) => state.posts.loadingStatus);
  const error = useAppSelector((state) => state.posts.error);


  useEffect(() => {
      dispatch(fetchPosts());
  }, []);

  const handlePostClick = (postId: string) => {
    navigate(`/posts/${postId}`);
  };

  const renderList = () => {
    if (postStatus === FetchingStatus.success) {
      return (
        <StyledPostsList className='posts-list'>
          {posts.map((post) =>
            <li key={post.id}>
              <Post
                post={post}
                onPostClick={handlePostClick} />
            </li>)}
        </StyledPostsList>
      );
    }
    if (postStatus === FetchingStatus.failed) {
      return <p>{error}</p>;
    }
    if (postStatus === FetchingStatus.pending) {
      return <h1>loading...</h1>;
    }
    return null;
  };

  return (
    renderList()
  );
}

export default PostsList;


