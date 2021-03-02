import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
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
  costPerPlayer: PropTypes.number,
  players: PropTypes.array // Array of players
});

export const Match = {
  id: "",
  clubName: "",
  dateAndTime: {start: "", end: ""},
  level: "",
  costPerPlayer: null,
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
   * costPerPlayer
   * players
   */
  editing: "idle",
  /**
   * It holds the id of the match to delete or "idle"
   */
  deleting: "idle",
  /**
   * It holds the tab selected to filter matches by
   * [coming|past|all]
   */
  tab: "coming"
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
    },
    selectTab: (state, action) => {
      state.tab = action.payload;
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
  deletedMatch,
  selectTab
} = matchesSlice.actions;

const selectors = matchesAdapter.getSelectors();

const selectByTab = createSelector(
  (matches, tab) => ({
    matches: selectors.selectAll(matches),
    tab
  }),
  ({ matches, tab }) => {
    if (tab === "all") {
      return matches;
    }
    return matches.filter(match => {
      if (tab === "coming") {
        return new Date(match.dateAndTime.start) > new Date()
      } else if (tab === "past") {
        return new Date(match.dateAndTime.start) < new Date()
      } else {
        return false;
      }
    });
  }
);

const selectByDates = createSelector(
  (matches, { start, end }) => ({
    matches: selectors.selectAll(matches),
    start,
    end
  }),
  ({ matches, start, end }) => {
    return matches.filter(match => {
      return new Date(match.dateAndTime.start) >= new Date(start) && new Date(match.dateAndTime.start) <= new Date(end)
    });
  }
);

export const matchesSelectors = {
  ...selectors,
  selectByTab,
  selectByDates
};

export default matchesSlice.reducer;
