import { create } from "zustand";

type Post = {
  id: string,
  title: string;
  body: string;
  author: string;
};

interface PostStoreState {
  posts: Post[];
  addNewPost: (post: Post) => void;
}

export const useBlogStore = create<PostStoreState>()((set) => ({
  posts: [
    { id: "1" ,title: "hello", body: "this is test", author: "Joe" },
    { id: "2" ,title: "two", body: "this is two", author: "James" },
  ],
  addNewPost: (newPost) => {
    set((state) => ({ posts: [...state.posts, newPost] }));
  },
}));
