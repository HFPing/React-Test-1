import Home from './screens/Home/Home';
import Plots from './screens/Plots/Plots';
import P5JS from './screens/P5JS/P5JS';
import TestApp1 from './screens/TestApp1/TestApp1';
import Dashboard from './screens/TestApp1/Nav/Dashboard/Dashboard';
import TextPage from './screens/TestApp1/Nav/TextPage/TextPage';
import MyShoppingLists from './screens/TestApp1/Nav/MyShoppingLists/MyShoppingLists';

import RouteNotFound from './components/RouteNotFound';

export const PATHS = {
  HOME: '/',
  PLOTS: '/plots',
  P5_JS: '/p5js',
  TEST_APP_1_HOME: '/testApp',
  TEST_APP_1_SHOPPING_LISTS: '/testApp/shoppingLists',
  TEST_APP_1_TEXT: '/testApp/textDemo',
};

const routes = [
  {
    path: PATHS.HOME,
    component: Home,
    exact: true,
  },
  {
    path: PATHS.PLOTS,
    component: Plots,
  },
  {
    path: PATHS.P5_JS,
    component: P5JS,
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
        component: TextPage,
      },
      {
        path: PATHS.TEST_APP_1_SHOPPING_LISTS,
        component: MyShoppingLists,
      },
      {
        path: '/*',
        component: RouteNotFound,
      },
    ],
  },
  {
    path: '/*',
    component: RouteNotFound,
  },
];

export default routes;
