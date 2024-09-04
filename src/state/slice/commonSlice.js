import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNotifiacation: false, // just for reference not used anywhere yet
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setShowNotifiacation(state, action) {
      state.showNotifiacation = action.payload.show;
    },
  },
});

export const commonActions = commonSlice.actions;
export default commonSlice.reducer;
