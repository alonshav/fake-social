/* tslint:disable */
/* eslint-disable */


/**
 * AUTO-GENERATED FILE - DO NOT EDIT!
 *
 * This file was automatically generated by pg-to-ts v.4.1.0
 * $ pg-to-ts generate -c postgres://username:password@localhost:5432/fake_social -t comment_images -t comment_reactions -t comments -t files -t followships -t friendships -t post_authors -t post_images -t post_images_agg -t post_reactions -t post_reactions_agg -t posts -t reaction_types -t user_events -t user_logs -t user_passwords -t user_roles -t users -s public
 *
 */


export type Json = unknown;

// Table comment_images
export interface CommentImages {
  comment_id: string;
  img_id: string;
}
export interface CommentImagesInput {
  comment_id: string;
  img_id: string;
}
const comment_images = {
  tableName: 'comment_images',
  columns: ['comment_id', 'img_id'],
  requiredForInsert: ['comment_id', 'img_id'],
  primaryKey: 'comment_id',
  foreignKeys: {
  comment_id: { table: 'posts', column: 'id', $type: null as unknown as Posts },
  img_id: { table: 'files', column: 'id', $type: null as unknown as Files },
  },
  $type: null as unknown as CommentImages,
  $input: null as unknown as CommentImagesInput
} as const;

// Table comment_reactions
export interface CommentReactions {
  id: string;
  reaction_type: string;
  user_id: string;
  comment_id: string;
  created_at: Date | null;
}
export interface CommentReactionsInput {
  id: string;
  reaction_type: string;
  user_id: string;
  comment_id: string;
  created_at?: Date | null;
}
const comment_reactions = {
  tableName: 'comment_reactions',
  columns: ['id', 'reaction_type', 'user_id', 'comment_id', 'created_at'],
  requiredForInsert: ['id', 'reaction_type', 'user_id', 'comment_id'],
  primaryKey: 'id',
  foreignKeys: {
  reaction_type: { table: 'reaction_types', column: 'id', $type: null as unknown as ReactionTypes },
  user_id: { table: 'users', column: 'id', $type: null as unknown as Users },
  comment_id: { table: 'comments', column: 'id', $type: null as unknown as Comments },
  },
  $type: null as unknown as CommentReactions,
  $input: null as unknown as CommentReactionsInput
} as const;

// Table comments
export interface Comments {
  id: string;
  user_id: string;
  post_id: string;
  text: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}
export interface CommentsInput {
  id: string;
  user_id: string;
  post_id: string;
  text?: string | null;
  created_at?: Date | null;
  updated_at?: Date | null;
}
const comments = {
  tableName: 'comments',
  columns: ['id', 'user_id', 'post_id', 'text', 'created_at', 'updated_at'],
  requiredForInsert: ['id', 'user_id', 'post_id'],
  primaryKey: 'id',
  foreignKeys: {
  user_id: { table: 'users', column: 'id', $type: null as unknown as Users },
  post_id: { table: 'posts', column: 'id', $type: null as unknown as Posts },
  },
  $type: null as unknown as Comments,
  $input: null as unknown as CommentsInput
} as const;

// Table files
export interface Files {
  id: string;
  file_link: string;
}
export interface FilesInput {
  id: string;
  file_link: string;
}
const files = {
  tableName: 'files',
  columns: ['id', 'file_link'],
  requiredForInsert: ['id', 'file_link'],
  primaryKey: 'id',
  foreignKeys: {},
  $type: null as unknown as Files,
  $input: null as unknown as FilesInput
} as const;

// Table followships
export interface Followships {
  follower_id: string;
  followed_id: string;
  created_at: Date | null;
}
export interface FollowshipsInput {
  follower_id: string;
  followed_id: string;
  created_at?: Date | null;
}
const followships = {
  tableName: 'followships',
  columns: ['follower_id', 'followed_id', 'created_at'],
  requiredForInsert: ['follower_id', 'followed_id'],
  primaryKey: 'follower_id',
  foreignKeys: {
  follower_id: { table: 'users', column: 'id', $type: null as unknown as Users },
  followed_id: { table: 'users', column: 'id', $type: null as unknown as Users },
  },
  $type: null as unknown as Followships,
  $input: null as unknown as FollowshipsInput
} as const;

// Table friendships
export interface Friendships {
  requester_id: string;
  receiver_id: string;
  request_status: string | null;
  created_at: Date | null;
}
export interface FriendshipsInput {
  requester_id: string;
  receiver_id: string;
  request_status?: string | null;
  created_at?: Date | null;
}
const friendships = {
  tableName: 'friendships',
  columns: ['requester_id', 'receiver_id', 'request_status', 'created_at'],
  requiredForInsert: ['requester_id', 'receiver_id'],
  primaryKey: 'requester_id',
  foreignKeys: {
  requester_id: { table: 'users', column: 'id', $type: null as unknown as Users },
  receiver_id: { table: 'users', column: 'id', $type: null as unknown as Users },
  },
  $type: null as unknown as Friendships,
  $input: null as unknown as FriendshipsInput
} as const;

// Table post_authors
export interface PostAuthors {
  post_id: string | null;
  author_id: string | null;
  author_email: string | null;
  author_nickname: string | null;
  author_firstname: string | null;
  author_lastname: string | null;
  author_profile_picture: string | null;
  author_role_type: string | null;
}
export interface PostAuthorsInput {
  post_id?: string | null;
  author_id?: string | null;
  author_email?: string | null;
  author_nickname?: string | null;
  author_firstname?: string | null;
  author_lastname?: string | null;
  author_profile_picture?: string | null;
  author_role_type?: string | null;
}
const post_authors = {
  tableName: 'post_authors',
  columns: ['post_id', 'author_id', 'author_email', 'author_nickname', 'author_firstname', 'author_lastname', 'author_profile_picture', 'author_role_type'],
  requiredForInsert: [],
  primaryKey: null,
  foreignKeys: {},
  $type: null as unknown as PostAuthors,
  $input: null as unknown as PostAuthorsInput
} as const;

// Table post_images
export interface PostImages {
  post_id: string;
  image_id: string;
}
export interface PostImagesInput {
  post_id: string;
  image_id: string;
}
const post_images = {
  tableName: 'post_images',
  columns: ['post_id', 'image_id'],
  requiredForInsert: ['post_id', 'image_id'],
  primaryKey: 'post_id',
  foreignKeys: {
  post_id: { table: 'posts', column: 'id', $type: null as unknown as Posts },
  image_id: { table: 'files', column: 'id', $type: null as unknown as Files },
  },
  $type: null as unknown as PostImages,
  $input: null as unknown as PostImagesInput
} as const;

// Table post_images_agg
export interface PostImagesAgg {
  post_id: string | null;
  post_images: string | null;
}
export interface PostImagesAggInput {
  post_id?: string | null;
  post_images?: string | null;
}
const post_images_agg = {
  tableName: 'post_images_agg',
  columns: ['post_id', 'post_images'],
  requiredForInsert: [],
  primaryKey: null,
  foreignKeys: {},
  $type: null as unknown as PostImagesAgg,
  $input: null as unknown as PostImagesAggInput
} as const;

// Table post_reactions
export interface PostReactions {
  id: string;
  reaction_type: string;
  user_id: string;
  post_id: string;
  created_at: Date | null;
}
export interface PostReactionsInput {
  id: string;
  reaction_type: string;
  user_id: string;
  post_id: string;
  created_at?: Date | null;
}
const post_reactions = {
  tableName: 'post_reactions',
  columns: ['id', 'reaction_type', 'user_id', 'post_id', 'created_at'],
  requiredForInsert: ['id', 'reaction_type', 'user_id', 'post_id'],
  primaryKey: 'id',
  foreignKeys: {
  reaction_type: { table: 'reaction_types', column: 'id', $type: null as unknown as ReactionTypes },
  user_id: { table: 'users', column: 'id', $type: null as unknown as Users },
  post_id: { table: 'posts', column: 'id', $type: null as unknown as Posts },
  },
  $type: null as unknown as PostReactions,
  $input: null as unknown as PostReactionsInput
} as const;

// Table post_reactions_agg
export interface PostReactionsAgg {
  post_id: string | null;
  like: number | null;
  celebrate: number | null;
  funny: number | null;
  love: number | null;
  sad: number | null;
}
export interface PostReactionsAggInput {
  post_id?: string | null;
  like?: number | null;
  celebrate?: number | null;
  funny?: number | null;
  love?: number | null;
  sad?: number | null;
}
const post_reactions_agg = {
  tableName: 'post_reactions_agg',
  columns: ['post_id', 'like', 'celebrate', 'funny', 'love', 'sad'],
  requiredForInsert: [],
  primaryKey: null,
  foreignKeys: {},
  $type: null as unknown as PostReactionsAgg,
  $input: null as unknown as PostReactionsAggInput
} as const;

// Table posts
export interface Posts {
  id: string;
  user_id: string;
  text: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}
export interface PostsInput {
  id: string;
  user_id: string;
  text?: string | null;
  created_at?: Date | null;
  updated_at?: Date | null;
}
const posts = {
  tableName: 'posts',
  columns: ['id', 'user_id', 'text', 'created_at', 'updated_at'],
  requiredForInsert: ['id', 'user_id'],
  primaryKey: 'id',
  foreignKeys: { user_id: { table: 'users', column: 'id', $type: null as unknown as Users }, },
  $type: null as unknown as Posts,
  $input: null as unknown as PostsInput
} as const;

// Table reaction_types
export interface ReactionTypes {
  id: string;
  reaction_type: string | null;
}
export interface ReactionTypesInput {
  id: string;
  reaction_type?: string | null;
}
const reaction_types = {
  tableName: 'reaction_types',
  columns: ['id', 'reaction_type'],
  requiredForInsert: ['id'],
  primaryKey: 'id',
  foreignKeys: {},
  $type: null as unknown as ReactionTypes,
  $input: null as unknown as ReactionTypesInput
} as const;

// Table user_events
export interface UserEvents {
  id: string;
  event_type: string;
}
export interface UserEventsInput {
  id: string;
  event_type: string;
}
const user_events = {
  tableName: 'user_events',
  columns: ['id', 'event_type'],
  requiredForInsert: ['id', 'event_type'],
  primaryKey: 'id',
  foreignKeys: {},
  $type: null as unknown as UserEvents,
  $input: null as unknown as UserEventsInput
} as const;

// Table user_logs
export interface UserLogs {
  id: string;
  user_id: string;
  event_id: string;
  created_at: Date | null;
}
export interface UserLogsInput {
  id: string;
  user_id: string;
  event_id: string;
  created_at?: Date | null;
}
const user_logs = {
  tableName: 'user_logs',
  columns: ['id', 'user_id', 'event_id', 'created_at'],
  requiredForInsert: ['id', 'user_id', 'event_id'],
  primaryKey: 'id',
  foreignKeys: {
  user_id: { table: 'users', column: 'id', $type: null as unknown as Users },
  event_id: { table: 'user_events', column: 'id', $type: null as unknown as UserEvents },
  },
  $type: null as unknown as UserLogs,
  $input: null as unknown as UserLogsInput
} as const;

// Table user_passwords
export interface UserPasswords {
  user_id: string | null;
  password_hash: string;
  password_salt: string;
}
export interface UserPasswordsInput {
  user_id?: string | null;
  password_hash: string;
  password_salt: string;
}
const user_passwords = {
  tableName: 'user_passwords',
  columns: ['user_id', 'password_hash', 'password_salt'],
  requiredForInsert: ['password_hash', 'password_salt'],
  primaryKey: null,
  foreignKeys: { user_id: { table: 'users', column: 'id', $type: null as unknown as Users }, },
  $type: null as unknown as UserPasswords,
  $input: null as unknown as UserPasswordsInput
} as const;

// Table user_roles
export interface UserRoles {
  id: string;
  user_role: string;
}
export interface UserRolesInput {
  id: string;
  user_role: string;
}
const user_roles = {
  tableName: 'user_roles',
  columns: ['id', 'user_role'],
  requiredForInsert: ['id', 'user_role'],
  primaryKey: 'id',
  foreignKeys: {},
  $type: null as unknown as UserRoles,
  $input: null as unknown as UserRolesInput
} as const;

// Table users
export interface Users {
  id: string;
  email: string;
  nickname: string;
  firstname: string;
  lastname: string;
  profile_picture_id: string | null;
  role_type: string;
  created_at: Date | null;
  updated_at: Date | null;
}
export interface UsersInput {
  id: string;
  email: string;
  nickname: string;
  firstname: string;
  lastname: string;
  profile_picture_id?: string | null;
  role_type: string;
  created_at?: Date | null;
  updated_at?: Date | null;
}
const users = {
  tableName: 'users',
  columns: ['id', 'email', 'nickname', 'firstname', 'lastname', 'profile_picture_id', 'role_type', 'created_at', 'updated_at'],
  requiredForInsert: ['id', 'email', 'nickname', 'firstname', 'lastname', 'role_type'],
  primaryKey: 'id',
  foreignKeys: {
  profile_picture_id: { table: 'files', column: 'id', $type: null as unknown as Files },
  role_type: { table: 'user_roles', column: 'id', $type: null as unknown as UserRoles },
  },
  $type: null as unknown as Users,
  $input: null as unknown as UsersInput
} as const;


export interface TableTypes {
  comment_images: {
  select: CommentImages;
  input: CommentImagesInput;
  };
  comment_reactions: {
  select: CommentReactions;
  input: CommentReactionsInput;
  };
  comments: {
  select: Comments;
  input: CommentsInput;
  };
  files: {
  select: Files;
  input: FilesInput;
  };
  followships: {
  select: Followships;
  input: FollowshipsInput;
  };
  friendships: {
  select: Friendships;
  input: FriendshipsInput;
  };
  post_authors: {
  select: PostAuthors;
  input: PostAuthorsInput;
  };
  post_images: {
  select: PostImages;
  input: PostImagesInput;
  };
  post_images_agg: {
  select: PostImagesAgg;
  input: PostImagesAggInput;
  };
  post_reactions: {
  select: PostReactions;
  input: PostReactionsInput;
  };
  post_reactions_agg: {
  select: PostReactionsAgg;
  input: PostReactionsAggInput;
  };
  posts: {
  select: Posts;
  input: PostsInput;
  };
  reaction_types: {
  select: ReactionTypes;
  input: ReactionTypesInput;
  };
  user_events: {
  select: UserEvents;
  input: UserEventsInput;
  };
  user_logs: {
  select: UserLogs;
  input: UserLogsInput;
  };
  user_passwords: {
  select: UserPasswords;
  input: UserPasswordsInput;
  };
  user_roles: {
  select: UserRoles;
  input: UserRolesInput;
  };
  users: {
  select: Users;
  input: UsersInput;
  };
}

export const tables = {
  comment_images,
  comment_reactions,
  comments,
  files,
  followships,
  friendships,
  post_authors,
  post_images,
  post_images_agg,
  post_reactions,
  post_reactions_agg,
  posts,
  reaction_types,
  user_events,
  user_logs,
  user_passwords,
  user_roles,
  users,
}
