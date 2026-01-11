import { createSlice } from "@reduxjs/toolkit";

const savedUsers = localStorage.getItem("users");

const userSlice = createSlice({
  name: "users",
  initialState: savedUsers ? JSON.parse(savedUsers) : [],
  
  reducers: {
    // create
    addUser: (state, action) => {
      state.push(action.payload);
    },

    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },

    updateUser: (state, action) => {
      const { id, name, email, age } = action.payload;
      const user = state.find((u) => u.id === id);
      if (user) {
        user.name = name;
        user.email = email;
        user.age = age;
      }
    },
  },
});

export const {addUser, deleteUser, updateUser} = userSlice.actions;
export default  userSlice.reducer;
