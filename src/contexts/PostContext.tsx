import { PostAction, postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Post";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const POSTS_KEY = "postContextContent";

type PostContext = {
  posts: Post[];
  dispatch: Dispatch<PostAction>;
};

export const PostContext = createContext<PostContext | null>(null);

export function PostProvider({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [posts, dispatch] = useReducer(
    postReducer,
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("posts") || "[]")
      : []
  );

  useEffect(() => {
    setIsMounted(true);
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  if (!isMounted) {
    return null;
  }

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
}

export const usePosts = () => useContext(PostContext);
