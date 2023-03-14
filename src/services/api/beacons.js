import HttpClient from '../../utils/HttpUtils';
import { API_LIST_BEACONS, API_MESSAGE_BY_BEACON_ID } from '../../constants';

export const getListBeacons = () => {
  return HttpClient.post(API_LIST_BEACONS);
};

export const getBeaconMessage = (beacon_id) => {
  const data = {
    beacon_id: beacon_id
  };
  return HttpClient.post(API_MESSAGE_BY_BEACON_ID, data);
};
