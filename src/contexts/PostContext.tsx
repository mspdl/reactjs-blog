import { PostAction, postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Post";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

type PostContext = {
  posts: Post[];
  dispatch: Dispatch<PostAction>;
};

export const PostContext = createContext<PostContext | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(postReducer, []);

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
