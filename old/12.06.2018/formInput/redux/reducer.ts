import { combineReducers } from 'redux';

import {
  FORM_INPUT_CHANGE_DYNAMIC_ITEMS_MODEL,
  FORM_INPUT_CHANGE_VALIDATION,
} from './';

// import { IFormInputDynamicItems } from '../interfaces';
// import { CLEAR_FORM_DATA } from '@src/components/registration/redux';

export type State = {
  readonly dynamicItemsModel: any,
};

export const reducer = combineReducers<State>({
  /** Содержит динамически создаваемый и изменяемый объект с данными полей ввода */
  dynamicItemsModel: (state = {}, action) => {
    switch (action.type) {
      case FORM_INPUT_CHANGE_DYNAMIC_ITEMS_MODEL:
        const newState = {
          ...state,
          [action.payload.id[0]]: {
            ...state[action.payload.id[0]],
            [action.payload.id[1]]: {
              value: action.payload.value,
              validation: action.payload.validation,
            }
          }
        };
        // console.log('newState:', newState);
        return newState;
      case FORM_INPUT_CHANGE_VALIDATION:
        return { ...action.payload };
      default: return state;
    }
  },
});
