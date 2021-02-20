import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false, // Indicates if settings are being loaded
  emojis: true // Indicates if we will use emojis when sharing content match in whatsapp or not
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    loadSettings(state) {
      state.loading = true;
    },
    enableEmojis(state, action) {
      state.emojis = action.payload;
    }
  }
})

export const {
  loadSettings,
  enableEmojis
} = settingsSlice.actions;

export default settingsSlice.reducer;
