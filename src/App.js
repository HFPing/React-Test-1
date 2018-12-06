import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';

import { RouteWithSubRoutes } from './components';
import configureStore from './redux/store';

import routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: '#027ACD',
      dark: blue[700],
    },
    secondary: {
      light: green[300],
      main: '#FCC201',
      dark: green[700],
    },
    text: {
      secondary: 'white',
    },
  },
  typography: {
    useNextVariants: true,
  },
  shape: { borderRadius: 4 },
});

const store = configureStore();

const App = () => (
  // eslint-disable-next-line
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

export default App;
