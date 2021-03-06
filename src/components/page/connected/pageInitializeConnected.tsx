import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageInitialize } from '../components';
// import { IFormsModelItem } from '@src/core/interfaces';
import { asyncActionCreators } from '@src/core/redux/page';

interface StateProps {
  isMenuLoaded: boolean,
  isError: boolean,
}

interface DispatchProps {
  getAllMenusFromAPI: () => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isMenuLoaded: (state: RootState) => state.page.isMenuLoaded,
    isError: (state: RootState) => state.page.isError,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    getAllMenusFromAPI: asyncActionCreators.getAllMenusFromAPI,
  }, dispatch);

export const PageInitializeConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(PageInitialize));