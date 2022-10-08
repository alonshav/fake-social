import { PayloadAction } from '@reduxjs/toolkit';
import { Author, IPost, PostId, PostsState, Reaction } from '@types';
import { v4 as uuid } from 'uuid';

export const addPostReducer = {
  reducer(posts: PostsState, action: PayloadAction<IPost>) {
    posts.list.unshift(action.payload);
  },
  prepare(author: Author, text: string) {
    return {
      payload: {
        author,
        text,
        ups: 0,
        id: uuid(),
        createdAt: new Date().toISOString(),
        reactions: {
          like: 1
        },
        isUserReacted: false
      }
    };
  }
};

export const toggleReactionReducer = (posts: PostsState, action: PayloadAction<{ id: PostId, reaction: Reaction }>) => {
  const { id, reaction } = action.payload;
  const selectedPost = posts.list.find(post => post.id === id);

  if (!selectedPost) return posts;

  if (selectedPost.isUserReacted) {
    selectedPost.isUserReacted = false;
    selectedPost.reactions[reaction]--;
  } else {
    selectedPost.isUserReacted = true;
    selectedPost.reactions[reaction]++;
  }

  return posts;
};
