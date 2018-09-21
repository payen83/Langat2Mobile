import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import{ Chart } from 'chart.js';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56], label: 'Series A'},
    {data: [28, 48, 40, 19, 86], label: 'Series B'},
    
  ];
  public lineChartLabels:Array<any> = ['Admin', 'Raw Water', 'Treatment Process', 'Sludge Treatment', 'Power Supply'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  // Doughnut
  public doughnutChartLabels:string[] = ['Instrument', 'Mechanical', 'Electrical', 'Structure'];
  public doughnutChartData:number[] = [400, 200, 200, 200];
  public doughnutChartType:string = 'doughnut';

// events
public chartClicke(e:any):void {
  console.log(e);
}

public chartHovere(e:any):void {
  console.log(e);
}

public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels:string[] = ['Instrument','Mechanical','Electrical','Structure'];
public barChartType:string = 'bar';
public barChartLegend:boolean = true;

public barChartData:any[] = [
  {data: [65,90,140,30]}
];

// events
public chartClick(e:any):void {
  console.log(e);
}

public chartHover(e:any):void {
  console.log(e);
}


  
constructor (){}
  IonViewDidLoad(){
    console.log('ioniViewLoad DashboardPage');
   
      
    }
    
  }

