import { IPost } from '@types';

export class PostModel implements IPost {
  author_fullName: string;
  author_nickName: string;
  author_picture?: string;
  id: string;
  image?: string;
  saved: boolean;
  text: string;
  title: string;
  topic: string;
  ups: number;
  visited: boolean;

  constructor(post: IPost) {
   this.author_fullName = post.author_fullName
   this.author_nickName = post.author_nickName
   this.author_picture = post.author_picture
   this.id = post.id
   this.image = post.image
   this.saved = post.saved
   this.text = post.text
   this.title = post.title
   this.topic = post.topic
   this.ups = post.ups
   this.visited = post.visited
  }

}
