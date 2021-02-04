import { createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit'

interface Player {
  nickname: string
  fullname?: string;
  phone?: string;
}

export interface Match {
  id: string;
  clubId: string;
  matchDate: Date;
  matchTime: string;
  players: Array<Player>;
}

export interface MatchState {
  loading: boolean;
  editMatchId: number | null;
  error: string | null;
}

export type MatchesState = ReturnType<typeof matchesSlice.reducer>

const matchesAdapter = createEntityAdapter();
export interface EditMatch {
  id: number | null;
}

interface InitialState {
  entities: [];
  ids: [];
  loading: boolean;
  editMatchId: number | null;
  error: null;
}

const initialState = matchesAdapter.getInitialState({
  entities: [],
  ids: [],
  loading: false,
  editMatchId: null,
  error: null
}) as InitialState;

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    loadMatches(state) {
      state.loading = true;
      state.error = null;
    },
    editMatch(state, action: PayloadAction<EditMatch>) {
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
