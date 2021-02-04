import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import PropTypes from "prop-types";

const matchesAdapter = createEntityAdapter();

export const MatchShape = PropTypes.shape({
  id: PropTypes.number,
  clubName: PropTypes.string,
  matchDate: PropTypes.object,
  matchTime: PropTypes.string,
  players: PropTypes.array
});

export const Match = {
  id: -1,
  clubName: '',
  matchDate: '',
  matchTime: '', // 00:00
  palyers: []
}

const initialState = matchesAdapter.getInitialState({
  loading: false,
  match: { ...Match }, // It holds the data of the match to create/edit
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
    createMatch(state) {
      state.match = {
        ...Match,
        id: 0
      };
    },
    editMatch(state, action) {
      state.editMatchId = action.payload;
    }
  }
})

export const {
  loadMatches,
  createMatch,
  editMatch
} = matchesSlice.actions;

export const matchesSelectors = {
  ...matchesAdapter.getSelectors()
};

export default matchesSlice.reducer;
