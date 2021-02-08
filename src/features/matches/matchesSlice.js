import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import PropTypes from "prop-types";

const matchesAdapter = createEntityAdapter();

export const PlayerShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  nickname: PropTypes.string,
  phone: PropTypes.string
});

export const Player = {
  id: -1,
  name: "",
  nickname: "",
  phone: ""
};

export const MatchShape = PropTypes.shape({
  id: PropTypes.number,
  clubName: PropTypes.string,
  dateAndTime: PropTypes.string, // String date Eg. 2014-08-20T16:30:00.000Z
  level: PropTypes.string,
  players: PropTypes.array // Array of players
});

export const Match = {
  id: -1,
  clubName: "",
  dateAndTime: "",
  level: "",
  players: Array.from({length: 4}, () => ({ ...Player }))
};

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
   * players
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
