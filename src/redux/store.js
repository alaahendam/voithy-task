import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/user";
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
