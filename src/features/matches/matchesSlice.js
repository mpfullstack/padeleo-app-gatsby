import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const matchesAdapter = createEntityAdapter();

const initialState = matchesAdapter.getInitialState({
  loading: false,
  editMatchId: null,
  error: null
});

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    loadMatches(state) {
      state.loading = true;
      state.error = null;
    },
    editMatch(state, action) {
      const { id } = action.payload;
      state.editMatchId = id;
    }
  }
})

export const {
  loadMatches,
  editMatch
} = matchesSlice.actions;

export const matchesSelectors = {
  ...matchesAdapter.getSelectors()
};

export default matchesSlice.reducer;
