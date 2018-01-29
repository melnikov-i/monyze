import { combineReducers } from 'redux';

import {
  DashboardInterface
} from '@src/interfaces';

import {
  THIS_DASHBOARD_WAS_REQUESTED_FROM_API,
  PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION
} from '@src/redux/dashboard';

import {
  USER_WAS_LOGOUT
} from '@src/redux/login';

export type State = {
  readonly DashboardCollection: DashboardInterface,
  readonly DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['id'],
};

const DashboardCollectionInitialState: DashboardInterface = {
  dash_id: {
    id: '',
    dashboard_name: '',
  },
  dash_data: []
}

export const reducer = combineReducers({
  DashboardCollection: 
  ( state = DashboardCollectionInitialState, action ) => {
    switch ( action.type ) {
      case PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION:
        return action.payload;
      case USER_WAS_LOGOUT:
        return DashboardCollectionInitialState;
      default:
        return state;
    }
  },
  DashboardWasRequestedFromAPI: ( state = '', action ) => {
    switch ( action.type ) {
      case THIS_DASHBOARD_WAS_REQUESTED_FROM_API:
        return action.payload;
      case USER_WAS_LOGOUT:
        return '';
      default:
        return state;
    }
  },
});