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
    toggleEmojis(state) {
      state.emojis = !state.emojis;
    }
  }
})

export const {
  loadSettings,
  toggleEmojis
} = settingsSlice.actions;

export default settingsSlice.reducer;
