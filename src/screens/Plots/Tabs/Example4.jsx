import React, { PureComponent } from 'react';

import Barchart from '../../../components/BarChartAm/BarChartAm';
import ClusterBarchart from '../../../components/BarChartAm2/BarChartAm2';

class Example4 extends PureComponent {
  render() {
    return (
      <div style={{ }}>
        <Barchart />
        <ClusterBarchart />
      </div>
    );
  }
}

export default Example4;
