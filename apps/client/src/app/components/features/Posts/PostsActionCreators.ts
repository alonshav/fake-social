import { IPost, PostsAction } from '@types';

export function addPost(post:IPost):PostsAction {
  return {
    type:'ADD_POST',
    payload: post
  }
}

export function deletePost(post:IPost):PostsAction {
  return {
    type:'DELETE_POST',
    payload: post
  }
}

export function updatePost(post:IPost):PostsAction {
  return {
    type:'UPDATE_POST',
    payload: post
  }
}

export function reloadPosts(posts:IPost[]):PostsAction {
  return {
    type:'RELOAD_POSTS',
    payload: posts
  }
}

export function resetList():PostsAction {
  return {
    type:'RESET_LIST'
  }
}
