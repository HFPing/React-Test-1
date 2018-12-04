import React, { PureComponent } from 'react';
import jsPDF from 'jspdf';
import Button from '@material-ui/core/Button';

import Barchart from '../../../components/BarChartAm/BarChartAm';
import ClusterBarchart from '../../../components/BarChartAm2/BarChartAm2';

class Example4 extends PureComponent {
  constructor(props) {
    super(props);
    this.barchartRef = React.createRef();
  }

  savePdf = (e) => {
    e.preventDefault();
    const doc = new jsPDF({
      format: [220, 280]
    })
    doc.text(`PDF filename: Some name`, 0.5, 0.8)
    doc.text(`Recipient: My Name`, 0.5, 5)
    doc.text(`Message: My Msg`, 0.5, 10)
    const barchartImg = this.barchartRef.current.chart;
    barchartImg.exporting.getImage("png")
      .then(imgData => {
        doc.addImage(imgData, 'PNG', 0, 20, 200, 100);
        doc.save(`demo.pdf`);
      });
  };
  render() {
    return (
      <div style={{ }}>
        <Button
          onClick={this.savePdf}
          variant="contained"
          color="secondary"
          style={{margin:'5px'}}
        >
            Download PDF
        </Button>
        <Barchart ref={this.barchartRef} />
        <ClusterBarchart />
      </div>
    );
  }
}

export default Example4;
