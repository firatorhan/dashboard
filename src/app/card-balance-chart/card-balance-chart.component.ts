import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexMarkers,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-card-balance-chart',
  templateUrl: './card-balance-chart.component.html',
  styleUrls: ['./card-balance-chart.component.css']
})
export class CardBalanceChartComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [75, 100, 50, 110, 40, 50, 45, 160, 120]
        }
      ],
      
      chart: {
        
        toolbar: {
          show: false},
        height: 220,
        width:500,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "",
        align: "left"
      },
      grid: {
        xaxis: {
          lines: {
              show: true
          }
      },   
      yaxis: {
        
          lines: {
              show: false
          }
      }, 
      
      },
      
      xaxis: {
       
        categories: [
          "8/19",
          "8/19",
          "8/19",
          "8/19",
          "8/19",
          "8/20",
          "8/20",
          "8/20",
          "8/20",
          "8/20"
        ]
      },
     
      
    };
  }
}
