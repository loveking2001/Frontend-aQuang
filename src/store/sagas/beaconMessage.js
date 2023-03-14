import { all, put, takeEvery } from 'redux-saga/effects';
import { LOAD_BEACON_MESSAGE } from '../actions/actionTypes';
import { getBeaconMessage } from '../../services/api/beacons';
import { API_R_200 } from '../../constants';
import { loadBeaconMessageSuccess } from '../actions/beaconMessage';
import { hideLoadingPage, showLoadingPage } from '../actions/ui';

function* loadBeaconMessageSaga(action) {
  try {
    yield put(showLoadingPage());
    const response = yield getBeaconMessage(action.beacon_id);
    if (response && response.status === API_R_200) {
      const { message } = yield response.data;
      yield put(loadBeaconMessageSuccess(message));
    } else {
      yield put(loadBeaconMessageSuccess([]));
    }
    // eslint-disable-next-line no-useless-catch
  } catch (e) {
    throw e;
  } finally {
    yield put(hideLoadingPage());
  }
}

function* watchBeaconMessage() {
  yield all([takeEvery(LOAD_BEACON_MESSAGE, loadBeaconMessageSaga)]);
}

export default watchBeaconMessage;
