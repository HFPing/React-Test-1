import React, { PureComponent } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import PropTypes from 'prop-types';

import dummyDataArr from './data.json';

am4core.useTheme(am4themes_animated);

class ClusterBarchart extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  drawChart() {
    // Create chart instance
    const chart = am4core.create("clusterchartdiv", am4charts.XYChart);

    // Add data
    chart.data = dummyDataArr;

    // Modify chart's colors
    chart.colors.list = [
      am4core.color("#4C78A9"),
      am4core.color("#F48E13"),
      am4core.color("#E35656"),
      am4core.color("#74B8B2"),
      am4core.color("#56A24A"),
      am4core.color("#F9F871"),
    ];

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.opposite = true;
    categoryAxis.renderer.grid.template.location = 0;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Price Gap";
    valueAxis.renderer.labels.template.adapter.add("text", (text) => `${text}%`);

    // Create series
    function createSeries(field, name, color) {  
      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "name";
      series.name = name;
      series.columns.template.tooltipText = `${field}: [bold]{valueY}%[/]`;
      series.columns.template.adapter.add("fill", (fill, target) =>
      chart.colors.getIndex(color)
    );

      const valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = `${field}`;
      valueLabel.locationY = 0.5;
    }

    createSeries("2016", "Name1", 0);
    createSeries("2017", "Name 2", 1);

    this.chart = chart;
  }

  render () {
    return <div id="clusterchartdiv"  style={{ width: "100%", height: "500px" }} />;
  };
}

ClusterBarchart.propTypes = {

};

ClusterBarchart.defaultProps = {

};

export default ClusterBarchart;
