import { all } from 'redux-saga/effects';
import watchBeaconMessage from './beaconMessage';
import watchBeacons from './beacons';

export default function* rootSaga() {
  yield all([watchBeacons(), watchBeaconMessage]);
}
