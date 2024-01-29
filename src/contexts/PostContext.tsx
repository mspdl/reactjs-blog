import { Post } from "@/types/Post";
import { ReactNode, createContext, useState } from "react";

type PostContext = {
  posts: Post[];
};

export const PostContext = createContext<PostContext | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};
