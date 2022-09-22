import { useEffect, useState } from 'react';
import { IPost } from '@fake-social/api-interfaces';
import apiAdapter from '../adapters/api.adapter';

function usePosts ():IPost[] {
  const [posts, setPosts] = useState<any>();


  useEffect(() => {
    const fetchPosts = async () => {
      const posts =  await apiAdapter.getPosts();
      setPosts(posts)
    };
    fetchPosts()
      .catch(console.error)
  },[]);


  return posts;
};

export default usePosts;
