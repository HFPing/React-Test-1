import React, { PureComponent } from 'react';

import Barchart from '../../../components/BarChartTuto/BarChartTuto';
import ScatterPlot from '../../../components/ScatterPlotTuto/ScatterPlotTuto';

class Example3 extends PureComponent {
  render() {
    return (
      <div style={{ }}>
        <Barchart />
        <ScatterPlot />
      </div>
    );
  }
}

export default Example3;
