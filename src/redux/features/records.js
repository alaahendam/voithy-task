import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openRecords: false,
};

export const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    setOpenRecords: (state, action) => {
      console.log(action.payload);
      state.openRecords = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenRecords } = recordsSlice.actions;

export default recordsSlice.reducer;
