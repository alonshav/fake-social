import React, { useEffect } from 'react';
import Post from '../Post/Post';
import { StyledPostsList } from '../../../styles/Posts.styled';
import { useAppSelector } from '../../../store/useAppSelector';
import { fetchPosts, selectAllPosts } from '../../../store/posts.slice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { LoadingStatus } from '@types';


function PostsList() {

  const navigate = useNavigate();
  const posts = useAppSelector(selectAllPosts);
  const dispatch = useAppDispatch();

  const postStatus = useAppSelector((state) => state.posts.loadingStatus);
  const error = useAppSelector((state) => state.posts.error);

  const orderedPosts = posts.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  useEffect(() => {
    if (postStatus === LoadingStatus.idle)
      dispatch(fetchPosts());
  }, [postStatus, dispatch]);

  const handlePostClick = (postId: string) => {
    navigate(`/posts/${postId}`);
  };

  const renderList = () => {
    if (postStatus === LoadingStatus.success) {
      return (
        <StyledPostsList className='posts-list'>
          {orderedPosts.map((post) =>
            <li key={post.id}>
              <Post
                post={post}
                onPostClick={handlePostClick} />
            </li>)}
        </StyledPostsList>
      );
    }
    if (postStatus === LoadingStatus.failed) {
      return <p>{error}</p>;
    }
    if (postStatus === LoadingStatus.pending) {
      return <h1>loading...</h1>;
    }
    return null;
  };

  return (
    renderList()
  );
}

export default PostsList;


