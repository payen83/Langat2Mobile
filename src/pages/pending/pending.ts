import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html',
})
export class PendingPage {
  assetcatList: Array<any>
  constructor(public storage:Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.assetcatList = [];
  }

  ionViewDidLoad() {
    this.storage.get('ASSETCAT_LIST').then((val) =>{

      if(val) {
        this.assetcatList = JSON.parse(val);
        console.log(this.assetcatList);
      }
    })
  }

}
