import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import recordsReducer from "./features/records";
export default configureStore({
  reducer: {
    user: userReducer,
    records: recordsReducer,
  },
});
