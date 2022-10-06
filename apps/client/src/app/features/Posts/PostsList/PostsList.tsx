import React from 'react';
import Post from '../Post/Post';
import { StyledPosts } from '../../../styles/Posts.styled';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectAllPosts } from '../postsSlice';
import { useNavigate } from 'react-router-dom';


function PostsList() {

  const navigate = useNavigate();
  const posts = useAppSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  const handlePostClick = (postId:string) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <StyledPosts className='posts-list'>
      {orderedPosts.map((post) =>
        <li key={post.id}>
          <Post
            post={post}
            onPostClick={handlePostClick} />
        </li>)}
    </StyledPosts>
  );
}

export default PostsList;


