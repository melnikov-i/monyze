import { combineReducers } from 'redux';

import { reducer as login, State as LoginState } from './login';
import { reducer as input, State as InputState } from './input';
import { reducer as registration, State as RegistrationState } from './registration';

import { reducer as main, State as MainState} from '@src/redux/main';
import { reducer as devices, State as DevicesState } from '@src/redux/devices';
import { reducer as overview, State as OverviewState } from '@src/redux/overview';
import { reducer as dashboard, State as DashboardState } from '@src/redux/dashboard';
import { reducer as mainHead, State as MainHeadState } from '@src/redux/mainHead';


export interface RootState {
  main: MainState,
  login: LoginState,
  devices: DevicesState,
  overview: OverviewState,
  dashboard: DashboardState,
  mainHead: MainHeadState,
  input: InputState,
  registration: RegistrationState,
}

export const rootReducer = combineReducers<RootState>({
  main,
  login,
  devices,
  overview,
  dashboard,
  mainHead,
  input,
  registration,
});