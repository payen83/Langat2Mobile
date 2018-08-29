import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  
  asset: string;
  data: {owning_org: string, main_operation: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.asset = 'general-info';
    this.data = {owning_org:'Air Selangor', main_operation:'New Operation'}
  }

  ionViewDidLoad(){

  }

  
}
