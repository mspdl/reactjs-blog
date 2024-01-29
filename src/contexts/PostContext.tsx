import { Post } from "@/types/Post";
import { ReactNode, createContext, useState } from "react";

type PostContext = {
  posts: Post[];
  addPost: (title: string, body: string) => void;
};

export const PostContext = createContext<PostContext | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (title: string, body: string) => {
    setPosts([
      ...posts,
      {
        id: Date.now(),
        title,
        body,
      },
    ]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
