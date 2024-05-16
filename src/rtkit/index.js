import {
  configureStore,
} from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import counterSlice from "./slice/counterSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    counter: counterSlice,
  },
});
export default store;
