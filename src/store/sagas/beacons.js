import { all, put, takeEvery } from 'redux-saga/effects';
import { LOAD_LIST_BEACONS } from '../actions/actionTypes';
import { getListBeacons } from '../../services/api/beacons';
import { API_R_200 } from '../../constants';
import { loadListBeaconsSuccess } from '../actions/beacons';
import { hideLoadingPage, showLoadingPage } from '../actions/ui';

function* loadListBeaconsSaga() {
  try {
    yield put(showLoadingPage());
    const response = yield getListBeacons();
    if (response && response.status === API_R_200) {
      const { beacons } = yield response.data;
      yield put(loadListBeaconsSuccess(beacons));
    } else {
      yield put(loadListBeaconsSuccess([]));
    }
    // eslint-disable-next-line no-useless-catch
  } catch (e) {
    throw e;
  } finally {
    yield put(hideLoadingPage());
  }
}

function* watchBeacons() {
  yield all([takeEvery(LOAD_LIST_BEACONS, loadListBeaconsSaga)]);
}

export default watchBeacons;
