import matchesSliceReducer from '../features/matches/matchesSlice';
import settingsSliceReducer from '../features/settings/settingsSlice';
import reportsSliceReducer from '../features/reports/reportsSlice';

export default {
  matches: matchesSliceReducer,
  settings: settingsSliceReducer,
  reports: reportsSliceReducer
};