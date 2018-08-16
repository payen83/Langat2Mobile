import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'Register.html'
})
export class RegisterPage {
  
  asset: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.asset = 'general-info';
  }

  ionViewDidLoad(){

  }

  
}
