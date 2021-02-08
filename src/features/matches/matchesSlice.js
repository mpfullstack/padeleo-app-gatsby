import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import PropTypes from "prop-types";

const matchesAdapter = createEntityAdapter();

export const MatchShape = PropTypes.shape({
  id: PropTypes.number,
  clubName: PropTypes.string,
  dateAndTime: PropTypes.string, // String date Eg. 2014-08-20T16:30:00.000Z
  level: PropTypes.string,
  players: PropTypes.array
});

export const Match = {
  id: -1,
  clubName: "",
  dateAndTime: "",
  level: "",
  palyers: []
}

const initialState = matchesAdapter.getInitialState({
  loading: false,
  match: { ...Match }, // It holds the data of the match to create/edit
  error: null,
  /**
   * It holds what part of the match we are editing
   * idle
   * clubName
   * dateAndTime
   * level
   * player1
   * player2
   * player3
   * player4
   */
  editing: "idle"
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
      state.editing = "idle";
    },
    editMatch(state, action) {
      state.editing = action.payload;
    },
    updatedOrCreatedMatch: (state, action) => {
      state.editing = "idle";
      state.match = action.payload;
      matchesAdapter.upsertOne(state, action);
    }
  }
})

export const {
  loadMatches,
  createMatch,
  editMatch,
  updatedOrCreatedMatch
} = matchesSlice.actions;

export const matchesSelectors = {
  ...matchesAdapter.getSelectors()
};

export default matchesSlice.reducer;
