import { LOAD_LIST_BEACONS_SUCCESS } from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
  beacons: []
};

const loadListBeaconsSuccess = (state, action) => {
  return updateObject(state, {
    beacons: action.beacons
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST_BEACONS_SUCCESS:
      return loadListBeaconsSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
