import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios/axios";

export const fetchUsers = createAsyncThunk("posts/fetchUsers", async () => {
  const { data } = await axios.get("/users");
  return data;
});
export const fetchUserById = createAsyncThunk(
  "posts/fetchUserById",
  async (id) => {
    const { data } = await axios.get(`/users/${id}`);
    return data;
  }
);

const initialState = {
  users: {
    items: [],
    loading: "loading",
  },
};
const userSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.users.items = [];
      state.users.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users.items = action.payload;
      state.users.status = "loaded";
    },
    [fetchUsers.rejected]: (state) => {
      state.users.items = [];
      state.users.status = "error";
    },
    [fetchUserById.pending]: (state) => {
      state.users.items = [];
      state.users.status = "loading";
    },
    [fetchUserById.fulfilled]: (state, action) => {
      state.users.items = action.payload;
      state.users.status = "loaded";
    },
    [fetchUserById.rejected]: (state) => {
      state.users.items = [];
      state.users.status = "error";
    },
  },
});

export const userReducer = userSlice.reducer;
