CREATE TABLE "posts" (
  "id" varchar PRIMARY KEY,
  "user_id" varchar NOT NULL,
  "text" text,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "post_images" (
  "post_id" varchar,
  "img_id" varchar,
  PRIMARY KEY ("post_id", "img_id")
);

CREATE TABLE "comment_images" (
  "comment_id" varchar,
  "img_id" varchar,
  PRIMARY KEY ("comment_id", "img_id")
);

CREATE TABLE "users" (
  "id" varchar PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "nickname" varchar UNIQUE NOT NULL,
  "firstname" varchar NOT NULL,
  "lastname" varchar NOT NULL,
  "profile_picture" varchar,
  "role_type" char(1) NOT NULL,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "user_passwords" (
  "user_id" varchar UNIQUE,
  "password_hash" varchar UNIQUE NOT NULL,
  "password_salt" varchar NOT NULL
);

CREATE TABLE "user_events" (
  "id" char(1) PRIMARY KEY,
  "event_type" text UNIQUE NOT NULL
);

CREATE TABLE "user_roles" (
  "id" char(1) PRIMARY KEY,
  "user_role" text UNIQUE NOT NULL
);

CREATE TABLE "comments" (
  "id" varchar PRIMARY KEY,
  "user_id" varchar NOT NULL,
  "post_id" varchar NOT NULL,
  "text" text,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "post_reactions" (
  "id" char(1) PRIMARY KEY,
  "reaction_type" char(1) NOT NULL,
  "user_id" varchar NOT NULL,
  "post_id" varchar NOT NULL,
  "created_at" timestamp
);

CREATE TABLE "comment_reactions" (
  "id" char(1) PRIMARY KEY,
  "reaction_type" char(1) NOT NULL,
  "user_id" varchar NOT NULL,
  "comment_id" varchar NOT NULL,
  "created_at" timestamp
);

CREATE TABLE "reaction_types" (
  "id" char(1) PRIMARY KEY,
  "reaction_name" text UNIQUE NOT NULL
);

CREATE TABLE "friendships" (
  "requester_id" varchar,
  "receiver_id" varchar,
  "request_status" text,
  "created_at" timestamp,
  PRIMARY KEY ("requester_id", "receiver_id")
);

CREATE TABLE "followships" (
  "follower_id" varchar,
  "followed_id" varchar,
  "created_at" timestamp,
  PRIMARY KEY ("follower_id", "followed_id")
);

CREATE TABLE "user_logs" (
  "id" varchar PRIMARY KEY,
  "user_id" varchar NOT NULL,
  "event_id" char(1) NOT NULL,
  "created_at" timestamp
);

CREATE TABLE "files" (
  "id" text PRIMARY KEY,
  "file_link" text UNIQUE NOT NULL
);

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("id");

ALTER TABLE "post_reactions" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("profile_picture") REFERENCES "files" ("id");

ALTER TABLE "post_reactions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "friendships" ADD FOREIGN KEY ("requester_id") REFERENCES "users" ("id");

ALTER TABLE "friendships" ADD FOREIGN KEY ("receiver_id") REFERENCES "users" ("id");

ALTER TABLE "followships" ADD FOREIGN KEY ("follower_id") REFERENCES "users" ("id");

ALTER TABLE "followships" ADD FOREIGN KEY ("followed_id") REFERENCES "users" ("id");

ALTER TABLE "user_passwords" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_logs" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_logs" ADD FOREIGN KEY ("event_id") REFERENCES "user_events" ("id");

ALTER TABLE "post_reactions" ADD FOREIGN KEY ("reaction_type") REFERENCES "reaction_types" ("id");

ALTER TABLE "comment_reactions" ADD FOREIGN KEY ("reaction_type") REFERENCES "reaction_types" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("role_type") REFERENCES "user_roles" ("id");

ALTER TABLE "comment_reactions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "comment_reactions" ADD FOREIGN KEY ("comment_id") REFERENCES "comments" ("id");

ALTER TABLE "post_images" ADD FOREIGN KEY ("img_id") REFERENCES "files" ("id");

ALTER TABLE "post_images" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("id");

ALTER TABLE "comment_images" ADD FOREIGN KEY ("comment_id") REFERENCES "posts" ("id");

ALTER TABLE "comment_images" ADD FOREIGN KEY ("img_id") REFERENCES "files" ("id");
