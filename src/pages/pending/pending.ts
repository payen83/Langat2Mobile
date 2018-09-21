import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';
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
  assetlocList: Array<any>
  assetgroupList: Array<any>
  tablestyle = 'bootstrap';
  public config : Config;
  public columns : any;
  public rows : any;
  users: any;

  constructor( public storage:Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.assetlocList = [];
    this.assetgroupList = [
      {asset: '1234', primaryCategory: 'Pump', subCategory1: 'test Category 1', subCategory2: 'test Category 2'},
      {asset: '3215', primaryCategory: 'Valve', subCategory1: 'test Category 2', subCategory2: 'test Category 2'}
    ];
    this.columns = [
      { prop:'asset', name: 'Asset ID' },
      { prop:'primaryCategory', name:'Asset Primary Category' },
      { prop:'subCategory1', name:'Sub Category 1' },
      { prop:'subCategory2', name:'Sub Category 2' }
    ];
  }

  ionViewDidLoad() {
    this.storage.get('ASSETLOC_LIST').then((val) =>{

      if(val) {
        this.assetlocList = JSON.parse(val);
        console.log(this.assetlocList);
      } else{
        this.assetlocList = [];
      console.log(this.assetlocList);
      }
    })

    this.storage.get('ASSETGROUP_LIST').then((val) =>{

      if(val) {
        //this.assetgroupList = JSON.parse(val);
        //console.log(this.assetgroupList);
      }else {
        //this.assetgroupList = [];
        console.log(this.assetgroupList);
      }
    })


  }



}
