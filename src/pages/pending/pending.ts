import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

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
  assetlocList: Array<any>
  assetgroupList: Array<any>
  tablestyle = 'bootstrap';
  public config : Config;
  public columns : any;
  public rows : any;
  users: any;

  constructor( private _HTTP: HttpClient, public storage:Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.assetlocList = [];
    this.assetgroupList = [];
    this.columns= [
      { prop:'Asset ID' },
      { name:'Asset Primary Category' },
      { name:'Sub Category 1' },
      { name:'Sub Category 2' }
    ];
  }

  ionViewDidLoad() {
    this.storage.get('ASSETLOC_LIST').then((val) =>{

      if(val) {
        this.assetlocList = JSON.parse(val);
        console.log(this.assetlocList);
      }else{
        this.assetlocList = [];
      console.log(this.assetlocList);
      }
      
    })

    this.storage.get('ASSETGROUP_LIST').then((val) =>{

      if(val) {
        this.assetgroupList = JSON.parse(val);
        console.log(this.assetgroupList);
      }else {
        this.assetgroupList = [];
        console.log(this.assetgroupList);
      }
    })


  }



}
