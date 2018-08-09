import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import{ Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('pieCanvas') pieCanvas;
  pieChart: any;
  
constructor (){}
  IonViewDidLoad(){
   
      this.pieChart = new Chart(this.pieCanvas.nativeElement,{
        type: 'pie',
        data: {
          labels: ['kerosakkan','Bencana','Ganguan'],
          datasets: [{
            backgroundcolor: ['blue','red','white'],
            data:[4,5,6],
            hoverBackgroundcolor: ['blue','red','white']
          }]
        }
      });
    }
    
  }

