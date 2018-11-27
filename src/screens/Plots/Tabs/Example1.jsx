import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Barchart from '../../../components/BarChart';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'red',
  }
};

class Example1 extends PureComponent {
  render() {
    return (
      <div>
        <Barchart />
      </div>
    );
  }
}

export default Example1;
