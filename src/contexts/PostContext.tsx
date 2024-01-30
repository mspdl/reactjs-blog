import { postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Post";
import { ReactNode, createContext, useReducer } from "react";

type PostContext = {
  posts: Post[];
  addPost: (title: string, body: string) => void;
};

export const PostContext = createContext<PostContext | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(postReducer, []);

  const addPost = (title: string, body: string) => {
    dispatch({ type: "add", payload: { title, body } });
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
