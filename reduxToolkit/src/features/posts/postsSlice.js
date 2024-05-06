import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "iredux toolkit",
    content: "It is time to practice this topic",
    userId: 1
  },
  { id: 2, title: "Rtk Query", content: "It is your next step", userId:3 },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          },
        };
      },
    },
  },
});

export const AllPostsSelector = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
