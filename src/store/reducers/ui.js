import {
  CLOSE_POPUP_MESSAGE,
  HIDE_LOADING_PAGE,
  SHOW_LOADING_PAGE,
  SHOW_POPUP_MESSAGE
} from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

// Default State
const initialState = {
  loading: false,
  isShowLoadingPage: false,
  isRenderPages: false,
  isNavBarOpen: false,
  popupConfigs: { message: '' },
  isOpenPopup: false
};

// UI Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING_PAGE:
      return updateObject(state, { isShowLoadingPage: true });
    case HIDE_LOADING_PAGE:
      return updateObject(state, { isShowLoadingPage: false });
    case SHOW_POPUP_MESSAGE:
      return updateObject(state, {
        isOpenPopup: true,
        popupConfigs: { message: action.message, headerTitle: action.headerTitle }
      });
    case CLOSE_POPUP_MESSAGE:
      return updateObject(state, { isOpenPopup: false, popupConfigs: { message: '' } });
    default:
      return state;
  }
};

export default reducer;
