import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    return data;
  } catch (error) {
    return [{ name: "jai aggarwal" }];
  }
});

export const fetchUser = createAsyncThunk("fetchUser", async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
});

export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  return id;
});

export const updateUser = createAsyncThunk("updateUser", async (id) => {
  const { data } = await axios.patch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      name: "Jai Aggarwal",
    }
  );
  return data;
});

export const newUser = createAsyncThunk("newUser", async () => {
  const { data } = await axios.post(
    `https://jsonplaceholder.typicode.com/users/`,
    {
      name: "Jai Aggarwal",
    }
  );
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState: { users: [], user: {} },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });
    builder.addCase(newUser.fulfilled, (state, action) => {
      let newUser = { ...action.payload, id: state.users.length + 1 };
      console.log(newUser);
      state.users = [...state.users, newUser];
    });
  },
});

export default userSlice.reducer;
