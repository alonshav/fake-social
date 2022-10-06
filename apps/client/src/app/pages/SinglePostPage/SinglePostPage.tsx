import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import Post from '../../features/Posts/Post/Post';
import { StyledSinglePostPage } from '../../styles/StyledSinglePostPage';

function SinglePostPage() {
  const { postId } = useParams();

  const selectedPost = useAppSelector(state =>
    state.posts.find(post => post.id === postId));

  return (
    <StyledSinglePostPage>
      {selectedPost && <Post className='single-post' post={selectedPost}></Post>}
    </StyledSinglePostPage>
  )
}

export default SinglePostPage;
