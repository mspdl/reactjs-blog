import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

const Footer = () => {
  const postCtx = useContext(PostContext);

  return (
    <footer className="border-t border-gray-500 mt-3 pt-2">
      Total posts: {postCtx?.posts.length}
    </footer>
  );
};

export default Footer;
