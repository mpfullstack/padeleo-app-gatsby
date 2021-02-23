import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
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
  id: PropTypes.string,
  clubName: PropTypes.string,
  /**
   * dateAndTime
   * {
   *  start: "" // String date Eg. 2014-08-20T16:30:00.000Z
   *  end: "" // String date Eg. 2014-08-20T16:30:00.000Z
   * }
   */
  dateAndTime: PropTypes.object,
  level: PropTypes.string,
  players: PropTypes.array // Array of players
});

export const Match = {
  id: "",
  clubName: "",
  dateAndTime: {start: "", end: ""},
  level: "",
  players: Array.from({length: 4}, () => ({ ...Player }))
};

const initialState = matchesAdapter.getInitialState({
  loading: false,
  match: { ...Match }, // It holds the data of the match to create/edit
  error: null,
  /**
   * It holds what field of the match we are editing
   * idle
   * clubName
   * dateAndTime
   * level
   * players
   */
  editing: "idle",
  /**
   * It holds the id of the match to delete or "idle"
   */
  deleting: "idle"
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
        id: uuidv4()
      };
      state.editing = "idle";
    },
    editMatch(state, action) {
      state.match = action.payload;
      state.deleting = "idle";
    },
    closeMatch(state) {
      state.match = { ...Match };
      state.editing = "idle";
    },
    editMatchField(state, action) {
      state.editing = action.payload;
    },
    updatedOrCreatedMatch: (state, action) => {
      state.editing = "idle";
      state.match = action.payload;
      matchesAdapter.upsertOne(state, action);
    },
    deleteMatch: (state, action) => {
      state.deleting = action.payload;
    },
    deletedMatch: (state, action) => {
      state.deleting = "idle";
      matchesAdapter.removeOne(state, action);
    }
  }
})

export const {
  loadMatches,
  createMatch,
  editMatch,
  closeMatch,
  editMatchField,
  updatedOrCreatedMatch,
  deleteMatch,
  deletedMatch
} = matchesSlice.actions;

export const matchesSelectors = {
  ...matchesAdapter.getSelectors()
};

export default matchesSlice.reducer;
