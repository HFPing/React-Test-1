import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, green } from "@material-ui/core/colors";

import { RouteWithSubRoutes } from './components';

import routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: "#027ACD",
      dark: blue[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    useNextVariants: true
  },
  shape: { borderRadius: 4 }
});


const App = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;
