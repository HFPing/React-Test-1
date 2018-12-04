import React, { PureComponent } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import dummyDataArr from './data.json';

am4core.useTheme(am4themes_animated);

class Barchart extends PureComponent {
  chart;

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
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Modify chart's colors
    chart.colors.list = [
      am4core.color("#4C78A9"),
      am4core.color("#F48E13"),
      am4core.color("#E35656"),
      am4core.color("#74B8B2"),
      am4core.color("#56A24A"),
      am4core.color("#F9F871"),
    ];

    // Add data
    chart.data = dummyDataArr;

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.tooltip.disabled = true;
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.minGridDistance = 40;
    valueAxis.title.text = "% of Total Sales";
    valueAxis.renderer.labels.template.adapter.add("text", (text) => `${text}%`);

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "height";
    series.dataFields.categoryX = "name";
    series.name = "Share of Format";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}%[/]";
    series.columns.template.fillOpacity = 0.8;
    series.columns.template.adapter.add("fill", (fill, target) =>
      chart.colors.getIndex(target.dataItem.index)
    );

    let valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}%";
    valueLabel.label.horizontalCenter = "middle";
    valueLabel.label.hideOversized = false;
    valueLabel.label.truncate = false;
    valueLabel.label.dy = -10;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 1;
    columnTemplate.strokeOpacity = 1;

    this.chart = chart;
  }

  render () {
    return <div id="chartdiv" style={{ width: "100%", height: "300px" }} />;
  };
}

Barchart.propTypes = {

};

Barchart.defaultProps = {

};

export default Barchart;
