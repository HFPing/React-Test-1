import React, { PureComponent } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { withStyles } from '@material-ui/core/styles';

import sketch from './DemoSketch';

const styles = theme => ({
  root: {
    flexGrow: 1,
    flex: 1,
  },
});

class Demo extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}

export default withStyles(styles)(Demo);
