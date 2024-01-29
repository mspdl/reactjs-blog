import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

const Footer = () => {
  const postCtx = useContext(PostContext);

  return <footer>Total posts: {postCtx?.posts.length}</footer>;
};

export default Footer;
