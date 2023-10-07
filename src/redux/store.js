import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import recordsReducer from "./features/records";
import appointmentsReducer from "./features/appointments";
export default configureStore({
  reducer: {
    user: userReducer,
    records: recordsReducer,
    appointments: appointmentsReducer,
  },
});
