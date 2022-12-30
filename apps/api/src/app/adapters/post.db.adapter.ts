import { Pool, QueryResult } from 'pg';
import { pgConfig } from '../../pg.config';
import { IPost, IUser, Posts, ReactionType } from '@types';
import dbAdapter from './base.db.adapter';

export const pool = new Pool(pgConfig);

const addPost = async (post: Posts) => dbAdapter.addRow<Posts>('posts', post);

const getAllPosts = async (): Promise<IPost[]> => {
  try {
    const query = `SELECT
                    posts.id,
                    posts.text,
                    post_images_agg.post_images,
                    post_reactions_agg.*,
                    post_authors.*,
                    posts.created_at,
                    posts.updated_at

                    FROM posts

                    LEFT JOIN post_authors
                    ON posts.id = post_authors.post_id

                    LEFT JOIN post_images_agg
                    ON posts.id = post_images_agg.post_id

                    LEFT JOIN post_reactions_agg
                    ON posts.id = post_reactions_agg.post_id
`;
    const res = await pool.query(query);

    return res.rows.map((post) => {
      if (!post) return;
      const postAuthor: IUser = {
        id: post.author_id,
        email: post.author_email,
        firstname: post.author_firstname,
        lastname: post.author_lastname,
        nickname: post.author_nickname,
        profilePicture: post.author_profile_picture,
        role: post.author_role_type,
      };

      const postReactions: Record<ReactionType, number> = {
        [ReactionType.like]: post.like,
        [ReactionType.celebrate]: post.celebrate,
        [ReactionType.funny]: post.funny,
        [ReactionType.love]: post.love,
        [ReactionType.sad]: post.sad,
      };

      return {
        id: post.id,
        text: post.text,
        title: '',
        topic: '',
        reactions: postReactions,
        author: postAuthor,
        createdAt: post.createdAt,
        images: post.post_images?.split(', '),
        updatedAt: post.updatedAt,
        isUserReacted: false,
      };
    });
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export default {
  getAllPosts,
  addPost,
};
