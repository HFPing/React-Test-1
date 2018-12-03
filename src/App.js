import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, green } from "@material-ui/core/colors";

import Home from './screens/Home/Home';
import Plots from './screens/Plots/Plots';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
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

const ErrorScreen = () => (
  <div>
    <p>Path does not exist</p>
  </div>
)

const App = ({ classes }) => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/plots" component={Plots} />
        <Route path="/*" component={ErrorScreen} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
