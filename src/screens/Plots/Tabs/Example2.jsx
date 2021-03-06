import React, { PureComponent } from 'react';

import Barchart from '../../../components/BarChart/BarChart';
//import chroma from 'chroma-js';

const data = [
  {
    name: 'BAE',
    height: 27,
  },
  {
    name: 'BOD',
    height: 42.16,
  },
  {
    name: 'MBO',
    height: 7.85,
  },
  {
    name: 'SCE',
    height: 33.39,
  },
  {
    name: 'SUP',
    height: 5.71,
  },
];

class Example2 extends PureComponent {
  render() {
    return (
      <div style={{ }}>
        <Barchart
          data={data}
          yLabel="% of Total Sales"
        />
      </div>
    );
  }
}

export default Example2;
