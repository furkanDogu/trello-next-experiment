export type GlobalPost = {
  id: string;
  name: string;
  desc?: string;
  url?: string;
};

declare global {
  export type Post = GlobalPost;
}
