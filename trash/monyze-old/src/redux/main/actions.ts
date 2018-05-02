import sendRequestToAPI from '@src/ajax';

import {
  MainMenuLinksInterface,
  UserInterface,
  DroppedMenuButtonClickedType,
} from '@src/interfaces';

import { Dispatch } from '@src/redux';

import {
  syncActionCreators as loginActionCreators
} from '@src/redux/login';


export const MAIN_MENU_WAS_REQUESTED_FROM_API =
  'MAIN_MENU_WAS_REQUESTED_FROM_API';
export const ALL_MENUS_WAS_RESPONSED_FROM_API =
  'ALL_MENUS_WAS_RESPONSED_FROM_API';
export const PUT_MAIN_MENU_FROM_API_TO_COLLECTION =
  'PUT_MAIN_MENU_FROM_API_TO_COLLECTION';
export const PUT_USER_MENU_FROM_API_TO_COLLECTION =
  'PUT_USER_MENU_FROM_API_TO_COLLECTION';
export const DEVICES_MENU_WAS_REQUESTED_FROM_API =
  'DEVICES_MENU_WAS_REQUESTED_FROM_API';
export const PUT_DEVICES_MENU_FROM_API_TO_COLLECTION =
  'PUT_DEVICES_MENU_FROM_API_TO_COLLECTION';
export const CHANGE_DROPPED_MENU_BUTTON_CLICKED_ID =
  'CHANGE_DROPPED_MENU_BUTTON_CLICKED_ID';
export const CHANGE_USER_AGENT =
  'CHANGE_USER_AGENT';
export const SWITCH_MENU_ON_SMALL_SCREENS =
  'SWITCH_MENU_ON_SMALL_SCREENS';
export const SWITCH_PAGE_MENU_ITEM_ACTIVE =
  'SWITCH_PAGE_MENU_ITEM_ACTIVE';
export const SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE =
  'SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE';


export type Actions = {
  MAIN_MENU_WAS_REQUESTED_FROM_API: {
    type: typeof MAIN_MENU_WAS_REQUESTED_FROM_API,
  },
  ALL_MENUS_WAS_RESPONSED_FROM_API: {
    type: typeof ALL_MENUS_WAS_RESPONSED_FROM_API,
  },
  PUT_MAIN_MENU_FROM_API_TO_COLLECTION: {
    type: typeof PUT_MAIN_MENU_FROM_API_TO_COLLECTION,
    payload: MainMenuLinksInterface[],
  },
  PUT_USER_MENU_FROM_API_TO_COLLECTION: {
    type: typeof PUT_USER_MENU_FROM_API_TO_COLLECTION,
    payload: UserInterface,
  },
  DEVICES_MENU_WAS_REQUESTED_FROM_API: {
    type: typeof DEVICES_MENU_WAS_REQUESTED_FROM_API,
  },
  PUT_DEVICES_MENU_FROM_API_TO_COLLECTION: {
    type: typeof PUT_DEVICES_MENU_FROM_API_TO_COLLECTION,
    payload: MainMenuLinksInterface[],
  },
  CHANGE_DROPPED_MENU_BUTTON_CLICKED_ID: {
    type: typeof CHANGE_DROPPED_MENU_BUTTON_CLICKED_ID,
    payload: DroppedMenuButtonClickedType,
  },
  CHANGE_USER_AGENT: {
    type: typeof CHANGE_USER_AGENT,
  },
  SWITCH_MENU_ON_SMALL_SCREENS: {
    type: typeof SWITCH_MENU_ON_SMALL_SCREENS,
  },
  SWITCH_PAGE_MENU_ITEM_ACTIVE: {
    type: typeof SWITCH_PAGE_MENU_ITEM_ACTIVE,
    payload: string,
  },
  SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE: {
    type: typeof SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE,
    payload: string,
  }
};

// Sync Action Creators
export const syncActionCreators = {
  mainMenuWasRequestedFromAPI: ():
  Actions[typeof MAIN_MENU_WAS_REQUESTED_FROM_API] => ({
    type: MAIN_MENU_WAS_REQUESTED_FROM_API,
  }),
  allMenusWasResponsedFromAPI: ():
  Actions[typeof ALL_MENUS_WAS_RESPONSED_FROM_API] => ({
    type: ALL_MENUS_WAS_RESPONSED_FROM_API,
  }),
  putMainMenuFromAPIToCollection:
  ( payload: MainMenuLinksInterface[] ):
  Actions[typeof PUT_MAIN_MENU_FROM_API_TO_COLLECTION] => ({
    type: PUT_MAIN_MENU_FROM_API_TO_COLLECTION, payload
  }),
  putUserMenuFromAPIToCollection:
  ( payload: UserInterface ):
  Actions[typeof PUT_USER_MENU_FROM_API_TO_COLLECTION] => ({
    type: PUT_USER_MENU_FROM_API_TO_COLLECTION, payload,
  }),
  devicesMenuWasRequestedFromAPI: ():
  Actions[typeof DEVICES_MENU_WAS_REQUESTED_FROM_API] => ({
    type: DEVICES_MENU_WAS_REQUESTED_FROM_API,
  }),
  putDevicesMenuFromAPIToCollection:
  ( payload: MainMenuLinksInterface[] ):
  Actions[typeof PUT_DEVICES_MENU_FROM_API_TO_COLLECTION] => ({
    type: PUT_DEVICES_MENU_FROM_API_TO_COLLECTION, payload,
  }),
  changeDroppedMenuClickedId:
  ( payload: DroppedMenuButtonClickedType ):
  Actions[typeof CHANGE_DROPPED_MENU_BUTTON_CLICKED_ID] => ({
    type: CHANGE_DROPPED_MENU_BUTTON_CLICKED_ID, payload,
  }),
  changeUserAgent: (): Actions[typeof CHANGE_USER_AGENT] => ({
    type: CHANGE_USER_AGENT,
  }),
  switchMenuOnSmallScreens: (): 
  Actions[typeof SWITCH_MENU_ON_SMALL_SCREENS] => ({
    type: SWITCH_MENU_ON_SMALL_SCREENS,
  }),
  switchPageMenuItemActive: ( payload: string ):
  Actions[typeof SWITCH_PAGE_MENU_ITEM_ACTIVE] => ({
    type: SWITCH_PAGE_MENU_ITEM_ACTIVE, payload,
  }),
  switchPageMenuItemMultiActive: ( payload: string ):
  Actions[typeof SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE] => ({
    type: SWITCH_PAGE_MENU_ITEM_MULTI_ACTIVE, payload,
  }),
};

// Async Action Creators
export const asyncActionCreators = {
  makeMainMenuRequestToAPI: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.mainMenuWasRequestedFromAPI()
      );
      sendRequestToAPI.post('/menu_data.php').then(
        ( response ) => {
          if ( response.data.menu !== null ) {
            const menu: MainMenuLinksInterface[] = response.data.menu;
            dispatch(
              syncActionCreators.putMainMenuFromAPIToCollection(menu)
            );
            const user: UserInterface = response.data.user[0].login;
            return user;
          } else {
            dispatch(
              loginActionCreators.userWasLogOut()
            );
            const user: UserInterface = {login: ''};
            return user;
          }
        }
      )
      .then(
        ( user ) => {
          dispatch(
            syncActionCreators.putUserMenuFromAPIToCollection(user)
          );
        }
      )
      .then(
        () => {
          if ( window.navigator.userAgent.indexOf('Firefox') !== -1 ) {
            dispatch(
              syncActionCreators.changeUserAgent()
            )
          }
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      );
    }
  },
  makeDevicesMenuRequestToAPI: () => {
    return ( dispatch: Dispatch ) => {
      dispatch(
        syncActionCreators.devicesMenuWasRequestedFromAPI()
      );
      sendRequestToAPI.post('/menu_devices.php').then(
        ( response ) => {
          if ( response.data.devices_list !== null ) {
            const devices: MainMenuLinksInterface[] = 
              response.data.devices_list;
            dispatch(
              syncActionCreators.putDevicesMenuFromAPIToCollection(devices)
            );
            dispatch(
              syncActionCreators.allMenusWasResponsedFromAPI()
            );
          } else {
            dispatch(
              loginActionCreators.userWasLogOut()
            );
          }
        }
      )
      .catch(
        ( error ) => {
          console.log('[ERROR]:', error);
        }
      );
    }
  }
};