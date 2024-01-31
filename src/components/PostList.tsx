import { usePosts } from "@/contexts/PostContext";

const PostList = () => {
  const postCtx = usePosts();

  const handleRemovePost = (postId: number) => {
    postCtx?.dispatch({ type: "remove", payload: { id: postId } });
  };

  return (
    <div className="">
      {postCtx?.posts.map((post) => (
        <div key={post.id} className="p-3">
          <h1 className="text-xl font-bold mb-2">{post.title}</h1>
          <div className="text-sm">{post.body}</div>
          <button onClick={() => handleRemovePost(post.id)}>[ remove ]</button>
        </div>
      ))}
      {!postCtx?.posts ||
        (postCtx.posts.length <= 0 && <p>There is no posts yet.</p>)}
    </div>
  );
};

export default PostList;
