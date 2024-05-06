import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { AllUsersSelector } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(AllUsersSelector)
  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId)
      );
      setTitle("");
      setContent("");
    }
  };

  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>{user.name}</option>
  ))

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <select onChange={e => setUserId(e.target.value)}>
          <option value={""}></option>
          {userOptions}
        </select>
        <input
          type="text"
          value={content}
          placeholder="description"
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
