import * as actionTypes from './actionTypes';

export const loadListBeacons = () => {
  return {
    type: actionTypes.LOAD_LIST_BEACONS
  };
};

export const loadListBeaconsSuccess = (beacons) => {
  return {
    type: actionTypes.LOAD_LIST_BEACONS_SUCCESS,
    beacons: beacons
  };
};
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
