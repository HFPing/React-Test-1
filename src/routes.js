import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Home from './screens/Home/Home';

const Root = ({ route, children }) => (
  <div>
    {renderRoutes(route.routes)}
    {children}     
  </div>
);

Root.propTypes = {
  route: PropTypes.object,
  children: PropTypes.object
};

const routes = [
  {
    path: "/",
    component: withRouter(Root),
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      }
    ],
  }
];

export { routes };
