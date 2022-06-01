import {createSlice} from '@reduxjs/toolkit';
import api from '../../api/indicator';

const initialState = {
  isLoading: false,
  error: false,
  indicators: [],
};

const slice = createSlice({
  name: 'indicators',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIndicators(state, action) {
      state.isLoading = false;
      state.indicators = action.payload;
    },
  },
});

//Reducer
export default slice.reducer;

//Actions
export const {} = slice.actions;

//Functions
export function getIndicators() {
  return async dispatch => {
    dispatch(slice.actions.startLoading());
    try {
      const data = await api.list();
      if (data) {
        dispatch(slice.actions.setIndicators(data));
      }
    } catch (err) {
      dispatch(slice.actions.setError(err));
    }
  };
}
