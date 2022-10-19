import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store/useAppSelector';
import Post from '../../features/Posts/Post/Post';
import { StyledSinglePostPage } from '../../styles/StyledSinglePostPage';
import { selectPostById } from '../../features/Posts/postsSlice';

function SinglePostPage() {
  const { postId } = useParams();

  const selectedPost = useAppSelector(state => selectPostById(state, postId));

  return (
    <StyledSinglePostPage>
      {selectedPost && <Post className='single-post' post={selectedPost}></Post>}
    </StyledSinglePostPage>
  );
}

export default SinglePostPage;
