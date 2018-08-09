import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  asset: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.asset = 'general-info';
  }

  ionViewDidLoad(){

  }

  
}
