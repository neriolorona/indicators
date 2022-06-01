import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';
const API_KEY = '8999a45f5d2b4a40b06d9c955c2bb786971601af';

const initialState = {
  isLoading: false,
  error: false,
  resources: [],
};

const slice = createSlice({
  name: 'resources',
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
    setResources(state, action) {
      state.isLoading = false;
      state.resources = action.payload;
    },
  },
});

//Reducer
export default slice.reducer;

//Actions
export const {setResources} = slice.actions;

//Functions
export function getResources(indicator) {
  return dispatch => {
    dispatch(slice.actions.startLoading());
    axios
      .get(
        `${API_URL}/${indicator.name}/posteriores/2020?apikey=${API_KEY}&formato=json`,
      )
      .then(response => {
        const [list] = Object.values(response.data);
        dispatch(slice.actions.setResources(list.reverse()));
      })
      .catch(err => {
        dispatch(slice.actions.setError(err));
      });
  };
}
