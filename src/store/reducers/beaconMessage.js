import { LOAD_BEACON_MESSAGE_SUCCESS } from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
  message: {}
};

const loadBeaconMessageSuccess = (state, action) => {
  return updateObject(state, {
    message: action.message
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BEACON_MESSAGE_SUCCESS:
      return loadBeaconMessageSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
