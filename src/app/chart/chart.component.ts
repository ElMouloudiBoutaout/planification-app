import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Task } from "../task/task";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {

  showChart = true;

  constructor() { }
  ngOnInit() {
  }

  public ngAfterViewInit(): void {

  }


  public lineChartData: Array<any> = [
    { data: [0], label: 'Progression' }
  ];
  public lineChartLabels: Array<any> = ['0','b','c','d','f'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public insertData(tasks: Task[]): void {
    let _lineChartData: Array<any> = new Array(1);
    let _lineChartLabels: Array<string> = new Array(tasks.length);

    for (let i = 0; i < 1; i++) {
      _lineChartData[i] = { data: new Array(tasks.length), label: "Progression" };
      for (let j = 0; j < _lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = tasks[j].note;
        _lineChartLabels[j] = tasks[j].name;
      }
    }
    this.lineChartData = _lineChartData;
    this.lineChartLabels = _lineChartLabels;

  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }



  tasks: Task[];

  recieveData(event) {
    this.tasks = event.data;
    this.insertData(this.tasks);
  }

}
