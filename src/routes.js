import React from 'react';

import Home from './screens/Home/Home';
import Plots from './screens/Plots/Plots';
import TestApp1 from './screens/TestApp1/TestApp1';
import Dashboard from './screens/TestApp1/Nav/Dashboard/Dashboard';
import TextPage from './screens/TestApp1/Nav/TextPage/TextPage';

const ErrorScreen = () => (
  <div>
    <p>Path does not exist</p>
  </div>
)

export const PATHS = {
  HOME: '/',
  PLOTS: '/plots',
  TEST_APP_1_HOME: '/testApp',
  TEST_APP_1_TEXT: '/testApp/textDemo'
};

const routes = [
  {
    path: PATHS.HOME,
    component: Home,
    exact: true,
  },
  {
    path: PATHS.PLOTS,
    component: Plots
  },
  {
    path: PATHS.TEST_APP_1_HOME,
    component: TestApp1,
    routes: [
      {
        path: PATHS.TEST_APP_1_HOME,
        component: Dashboard,
        exact: true,
      },
      {
        path: PATHS.TEST_APP_1_TEXT,
        component: TextPage
      },
      {
        path: "/*",
        component: ErrorScreen
      },
    ]
  },
  {
    path: "/*",
    component: ErrorScreen
  },
];

export default routes;
