import { createSlice } from "@reduxjs/toolkit";

export const MONTHLY = "monthly";
export const WEEKLY = "weekly";

const initialState = {
  loading: false, // Indicates if reports are being loaded
  start: null, // Start date filter
  end: null, // End date filter
  period: MONTHLY // [MONTHLY | WEEKLY] Group report results by period
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    loadReports(state) {
      state.loading = true;
    },
    setStartDate(state, action) {
      state.start = action.payload;
    },
    setEndDate(state, action) {
      state.end = action.payload;
    },
    changePeriod(state, action) {
      state.period = action.payload;
    }
  }
})

export const {
  loadReports,
  setStartDate,
  setEndDate,
  changePeriod
} = reportsSlice.actions;

export default reportsSlice.reducer;
