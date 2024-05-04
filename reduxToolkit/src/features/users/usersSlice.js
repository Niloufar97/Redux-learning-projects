import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1 , name: "Niloufar"},
    {id:2 , name: "Mohammad"},
    {id:3 , name: "Armin"},
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers : {

    }
})

export const AllUsersSelector = (state) =>  state.users
export default userSlice.reducer