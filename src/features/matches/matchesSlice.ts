import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const matchesAdapter = createEntityAdapter();

interface MatchesState {
  loading: boolean;
  editMatchId: number | null;
  error: string | null;
}

const initialState: MatchesState = matchesAdapter.getInitialState({
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
    }
  }
})

export const {
  loadMatches,
} = matchesSlice.actions

export default matchesSlice.reducer;
