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
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [50, 40, 60],
         
          
        },
       
      ],
      
      chart: {
        toolbar: {
          show: false},
        height: 280,
        width:320,
        type: "line",
        zoom: {
          enabled: false
        },
        
        foreColor: '#29313A'
        
      },
    
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
        colors:['#29313A']
      },
      title: {
        
        text: "",
        align: "left"
      },
      grid: {
        show:false,
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.0
        }
      },
      xaxis: {
        categories: [
          "1/20",
          "2/20",
          "3/20",
          
        ]
      },
      yaxis:{
        show:false
      }
    };
  }
}
