import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Home from './screens/Home/Home';
import Plots from './screens/Plots/Plots';

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Route exact path="/" component={Home} />
      <Route exact path="/plots" component={Plots} />
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
