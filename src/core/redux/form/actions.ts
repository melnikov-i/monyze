/**
 * ### FORMS ACTIONS ###
 */
export const CREATE_FORMS_MODEL_ITEM = 'CREATE_FORMS_MODEL_ITEM';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_CHECKBOX_VALUE = 'CHANGE_CHECKBOX_VALUE';
export const CHANGE_CHECKBOX_FOCUSED = 'CHANGE_CHECKBOX_FOCUSED';
export const CLEAR_FORMS_MODEL = 'CLEAR_FORMS_MODEL';
export const VALIDATE_FORMS_MODEL_ITEM = 'VALIDATE_FORMS_MODEL_ITEM';

export type Actions = {
  CREATE_FORMS_MODEL_ITEM: {
    type: typeof CREATE_FORMS_MODEL_ITEM,
    payload: any,
  },
  CHANGE_INPUT_VALUE: {
    type: typeof CHANGE_INPUT_VALUE,
    payload: any,
  },
  CHANGE_CHECKBOX_VALUE: {
    type: typeof CHANGE_CHECKBOX_VALUE,
    payload: any,
  },
  CHANGE_CHECKBOX_FOCUSED: {
    type: typeof CHANGE_CHECKBOX_FOCUSED,
    payload: any,
  },
  CLEAR_FORMS_MODEL: {
    type: typeof CLEAR_FORMS_MODEL,
  },
  VALIDATE_FORMS_MODEL_ITEM: {
    type: typeof VALIDATE_FORMS_MODEL_ITEM,
    payload: any,
  },
};

export const syncActionCreators = {
  /** передает в хранилище новую ячейку экземпляра компонента */
  createFormsModelItem: (payload: any): 
  Actions[typeof CREATE_FORMS_MODEL_ITEM] => ({
    type: CREATE_FORMS_MODEL_ITEM, payload,
  }),

  /** передает в хранилище измененное значение экземпляра поля */
  changeInputValue: (payload: any): Actions[typeof CHANGE_INPUT_VALUE] => ({
    type: CHANGE_INPUT_VALUE, payload,
  }),

  /** передает в хранилище измененное значение экземпляра поля */
  changeCheckboxValue: (payload: any): Actions[typeof CHANGE_CHECKBOX_VALUE] => ({
    type: CHANGE_CHECKBOX_VALUE, payload,
  }),

  /** передает в хранилище измененное значение экземпляра поля */
  changeCheckboxFocused: (payload: any): Actions[typeof CHANGE_CHECKBOX_FOCUSED] => ({
    type: CHANGE_CHECKBOX_FOCUSED, payload,
  }),

  /** очищает ячейку поля в хранилище */
  clearFormsModel: (): Actions[typeof CLEAR_FORMS_MODEL] => ({
    type: CLEAR_FORMS_MODEL,
  }),

  /** передает в хранилище дополненные значениями валидации объект */
  validateFormsModelItem: (payload: any): 
  Actions[typeof VALIDATE_FORMS_MODEL_ITEM] => ({
    type: VALIDATE_FORMS_MODEL_ITEM, payload,
  }),
}