import { PayloadAction } from '@reduxjs/toolkit';
import { IPost, IUser, PostId, PostsState, ReactionType } from '@types';
import { v4 as uuid } from 'uuid';

export const addPostReducer = {
  reducer(posts: PostsState, action: PayloadAction<IPost>) {
    posts.list.unshift(action.payload);
  },
  prepare(author: IUser, text: string) {
    return {
      payload: {
        author,
        text,
        title: '',
        topic: '',
        id: uuid(),
        image: '',
        ups: 0,
        images: [],
        createdAt: new Date().toISOString(),
        reactions: {
          LIKE: 0,
          CELEBRATE: 0,
          FUNNY: 0,
          LOVE: 0,
          SAD: 0,
        },
        isUserReacted: false,
      },
    };
  },
};

export const toggleReactionReducer = (
  posts: PostsState,
  action: PayloadAction<{ id: PostId; reaction: ReactionType }>
) => {
  const { id, reaction } = action.payload;
  const selectedPost = posts.list.find((post) => post.id === id);

  if (!selectedPost) return posts;

  if (selectedPost.isUserReacted) {
    selectedPost.isUserReacted = false;
    selectedPost.reactions[reaction] = 1;
  } else {
    selectedPost.isUserReacted = true;
    selectedPost.reactions[reaction] = 0;
  }

  return posts;
};
