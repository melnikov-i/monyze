import * as React from 'react';

import { DashboardInterface } from '@src/interfaces';
import { DashboardConnected } from '@src/connected';

export default ({id}: {id: DashboardInterface['dash_id']['dashboard_id']}) => (
  <DashboardConnected id={id} />
);