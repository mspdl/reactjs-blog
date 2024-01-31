import { PostContext } from "@/contexts/PostContext";
import { useContext, useState } from "react";

const Header = () => {
  const postCtx = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddButton = () => {
    if (title.trim() === "" || body.trim() === "") return false;
    postCtx?.dispatch({ type: "add", payload: { title, body } });
    setTitle("");
    setBody("");
  };

  return (
    <header>
      <h1 className="text-3xl">Page Title</h1>

      <div className="max-w-xl flex flex-col gap-2 border border-dotted border-gray-400 p-3 my-4">
        <input
          className="border border-gray-300 p-2 text-left text-xl text-black"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="h-24 border border-gray-300 p-2 text-left text-xl text-black"
          placeholder="Describe your post"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <button
          className="bg-blue-500 p-3 text-white rounded-md m-3"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </header>
  );
};

export default Header;
