import sendRequestToAPI from '@src/ajax';

import {
  DashboardInterface,
  MoveWidgetsInterface,
  DraggableDashboardChangerIterface,
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

import {
  syncActionCreators as loginActionCreators
} from '@src/redux/login';

import {
  syncActionCreators as mainHeadActionCreators
} from '@src/redux/mainHead';

export const THIS_DASHBOARD_WAS_REQUESTED_FROM_API =
  'THIS_DASHBOARD_WAS_REQUESTED_FROM_API';
export const PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION =
  'PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION';
export const CHANGE_SELECTED_CHECKBOX = 
  'CHANGE_SELECTED_CHECKBOX';
export const SET_SELECTED_CHECKBOX = 
  'SET_SELECTED_CHECKBOX';
export const REORDER_DRAGGABLE_WIDGETS_COLLECTION =
  'REORDER_DRAGGABLE_WIDGETS_COLLECTION';
export const CREATE_DRAGGABLE_DASHBOARD =
  'CREATE_DRAGGABLE_DASHBOARD';

export type Actions = {
  THIS_DASHBOARD_WAS_REQUESTED_FROM_API: {
    type: typeof THIS_DASHBOARD_WAS_REQUESTED_FROM_API,
    payload: DashboardInterface['dash_id']['dashboard_id'],
  },
  PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION: {
    type: typeof PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION,
    payload: DashboardInterface,
  },
  SET_SELECTED_CHECKBOX: {
    type: typeof SET_SELECTED_CHECKBOX,
    payload: string,
  },
  CHANGE_SELECTED_CHECKBOX: {
    type: typeof CHANGE_SELECTED_CHECKBOX,
    payload: string,
  },
  REORDER_DRAGGABLE_WIDGETS_COLLECTION: {
    type: typeof REORDER_DRAGGABLE_WIDGETS_COLLECTION,
    payload: MoveWidgetsInterface,
  },
  CREATE_DRAGGABLE_DASHBOARD: {
    type: typeof CREATE_DRAGGABLE_DASHBOARD,
    payload: DraggableDashboardChangerIterface,
  },
};

// Sync Action Creators
export const syncActionCreators = {
  dashboardWasRequestedFromAPI: 
  ( payload: DashboardInterface['dash_id']['dashboard_id'] ):
  Actions[typeof THIS_DASHBOARD_WAS_REQUESTED_FROM_API] => ({
    type: THIS_DASHBOARD_WAS_REQUESTED_FROM_API, payload
  }),
  putDashboardItemsFromAPIToDashboardCollection:
  ( payload: DashboardInterface ):
  Actions[typeof PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION] => ({
    type: PUT_DASHBOARD_FROM_API_TO_DASHBOARD_COLLECTION, payload,
  }),
  setSelectedCheckbox: (payload: string):
  Actions[typeof SET_SELECTED_CHECKBOX] => ({
    type: SET_SELECTED_CHECKBOX, payload,
  }),
  changeSelectedCheckbox: (payload: string):
  Actions[typeof CHANGE_SELECTED_CHECKBOX] => ({
    type: CHANGE_SELECTED_CHECKBOX, payload,
  }),
  reorderDraggableWidgetsCollection:
  ( payload: MoveWidgetsInterface ):
  Actions[typeof REORDER_DRAGGABLE_WIDGETS_COLLECTION] => ({
    type: REORDER_DRAGGABLE_WIDGETS_COLLECTION, payload,
  }),
  createDraggableDashboard:
  ( payload: DraggableDashboardChangerIterface ):
  Actions[typeof CREATE_DRAGGABLE_DASHBOARD] => ({
    type: CREATE_DRAGGABLE_DASHBOARD, payload,
  }),
};

const getDashboardFromAPI = (
payload: DashboardInterface['dash_id']['dashboard_id'],
dispatch: Dispatch) => {
  dispatch(
    syncActionCreators.dashboardWasRequestedFromAPI(payload)
  );
  sendRequestToAPI.get('/dash_data2.php?dashboard_id=' + payload).then(
    ( response ) => {
      if ( response.data.dashboard !== null ) {
        if ( response.data.dashboard.dash_id !== null ) {
          console.log('3) Dashboard:', response.data.dashboard);
          const items: DashboardInterface = response.data.dashboard;
          dispatch(
            syncActionCreators
              .putDashboardItemsFromAPIToDashboardCollection(items)
          );              
        }
      } else {
        dispatch(
          loginActionCreators.userWasLogOut()
        )
      }
      if ( response.data.dashboard.dash_id !== null ) {
        return response.data.dashboard.dash_id.dash_columns;
      } else {
        return '2';
      }
    }
  )
  .then(
    ( checkbox ) => {
      dispatch(
        syncActionCreators.setSelectedCheckbox(checkbox)
      );
    }
  )
  .catch(
    ( error ) => {
      console.log('[ERROR]:', error);
    }
  );  
}

// Async Action Creators
export const asyncActionCreators = {
  makeDashboardRequestFromAPI: 
  ( payload: DashboardInterface['dash_id']['dashboard_id'] ) => {
    return ( dispatch: Dispatch ) => {
      getDashboardFromAPI(payload, dispatch);
    }
  },
  sendChangedDashboardToAPI:
  ( payload: DashboardInterface ) => {
    return ( dispatch: Dispatch ) => {
      console.log('1) payload:', payload);
      sendRequestToAPI.post('/dash_data2.php', payload).then(
        ( response ) => {
          console.log('2) response:', response.data);
          getDashboardFromAPI(payload.dash_id.dashboard_id, dispatch);
          dispatch(
            mainHeadActionCreators.mainHeaderButtonSwitch()
          );
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      )
    }
  }
};