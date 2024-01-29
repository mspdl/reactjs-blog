import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

const PostList = () => {
  const postCtx = useContext(PostContext);

  return (
    <div className="">
      {postCtx?.posts.map((post) => (
        <div key={post.id} className="p-3 border-b border-gray-500">
          <h1 className="text-xl font-bold mb-2">{post.title}</h1>
          <div className="text-sm">{post.body}</div>
        </div>
      ))}
      {!postCtx?.posts ||
        (postCtx.posts.length <= 0 && <p>There is no posts yet.</p>)}
    </div>
  );
};

export default PostList;
