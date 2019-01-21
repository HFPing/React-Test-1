import React, { PureComponent } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { withStyles } from '@material-ui/core/styles';

import sketch from './Sketches/DemoSketch';

const styles = theme => ({
  root: {
    flexGrow: 1,
    flex: 1,
  },
});

class Demo extends PureComponent {
  render() {
    const { classes } = this.props;
    return (<P5Wrapper sketch={sketch} />);
  }
}

export default withStyles(styles)(Demo);
