import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointments: (state, action) => {
      state.appointments = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAppointments } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
