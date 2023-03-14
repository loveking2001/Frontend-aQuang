import * as actionTypes from './actionTypes';

export const loadBeaconMessage = () => {
  return {
    type: actionTypes.LOAD_BEACON_MESSAGE
  };
};

export const loadBeaconMessageSuccess = (message) => {
  return {
    type: actionTypes.LOAD_BEACON_MESSAGE_SUCCESS,
    message: message
  };
};
