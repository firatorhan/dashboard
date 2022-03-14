import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  labels: string[];
  stroke:ApexStroke;
};
@Component({
  selector: 'app-slim-text-widget',
  templateUrl: './slim-text-widget.component.html',
  styleUrls: ['./slim-text-widget.component.css']
})
export class SlimTextWidgetComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [70],
      
      chart: {
        height: 135,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
        
      },
      
      labels: ["Cricket"]
    };
  }
}
