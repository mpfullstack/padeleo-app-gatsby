import { createSlice } from "@reduxjs/toolkit";

export const MONTHLY = "monthly";
export const WEEKLY = "weekly";

const getDefaultStartDate = () => {
  const date = new Date();
  date.setMonth(0);
  date.setDate(1);
  return date.toISOString();
}

const getDefaultEndDate = () => {
  const date = new Date();
  date.setMonth(11);
  date.setDate(31);
  return date.toISOString();
}

const initialState = {
  loading: false, // Indicates if reports are being loaded
  start: getDefaultStartDate(), // Start date filter
  end: getDefaultEndDate(), // End date filter
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
      state.start = action.payload.toISOString();
    },
    setEndDate(state, action) {
      state.end = action.payload.toISOString();
    },
    changePeriod(state, action) {
      state.period = action.payload;
    }
  }
});

export const {
  loadReports,
  setStartDate,
  setEndDate,
  changePeriod
} = reportsSlice.actions;

export default reportsSlice.reducer;
