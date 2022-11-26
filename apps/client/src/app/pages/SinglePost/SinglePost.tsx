import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../shared/hooks/store/useAppSelector';
import Post from '../../features/Posts/Post/Post';
import { SinglePostStyled } from '../../styles/SinglePost.styled';
import { selectPostById } from '../../features/Posts/postsSlice';

function SinglePost() {
  const { postId } = useParams();

  const selectedPost = useAppSelector(state => selectPostById(state, postId));

  return (
    <SinglePostStyled>
      {selectedPost && <Post className='single-post' post={selectedPost}></Post>}
    </SinglePostStyled>
  );
}

export default SinglePost;