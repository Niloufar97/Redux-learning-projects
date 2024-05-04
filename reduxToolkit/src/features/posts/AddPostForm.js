import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content)
      );
      setTitle("");
      setContent("");
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
