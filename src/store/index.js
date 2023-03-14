import { applyMiddleware, combineReducers, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import uiReducer from './reducers/ui';
import beaconsReducer from './reducers/beacons';
import beaconMessageReducer from './reducers/beaconMessage';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  ui: uiReducer,
  beacons: beaconsReducer,
  beaconMessage: beaconMessageReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
