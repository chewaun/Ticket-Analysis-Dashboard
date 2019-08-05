import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-tickettrend',
  templateUrl: './tickettrend.component.html',
  styleUrls: ['./tickettrend.component.css']
})
export class TickettrendComponent implements OnInit {
  title = 'Statistic Trends';
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{ticks: {
      beginAtZero: true
    }}], yAxes: [{ticks: {
      beginAtZero: true
    }}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['July 2019'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [10], label: 'Access Issue' },
    { data: [30], label: 'Data Issue' },
    { data: [20], label: 'Knowledge Gap' },
    { data: [5], label: 'Release Defect' },
    { data: [50], label: 'Network Issue' },
    { data: [100], label: 'Unknown' }
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}
