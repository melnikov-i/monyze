import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { OverviewInitialize } from '../components';
import { asyncActionCreators } from '@src/core/redux/overview';

interface StateProps {
  isOverviewLoaded: boolean,
  isOverviewError: boolean,
}

interface DispatchProps {
  getOverviewCollection: () => any,
}

interface OwnProps {}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isOverviewLoaded:(state: RootState) => state.overview.isOverviewLoaded,
    isOverviewError: (state: RootState) => state.overview.isOverviewError,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    getOverviewCollection: asyncActionCreators.getOverviewCollection
  }, dispatch);

export const OverviewInitializeConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(OverviewInitialize));