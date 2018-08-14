import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/List/List';
import { UserProvider } from '../providers/user/user';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';
  isLoggedIn: boolean = false;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public user: UserProvider, public events: Events, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Main', component: MainPage, icon: 'folder'},
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'List', component: ListPage, icon: 'list' },
      { title: 'Profile', component: 'ProfilePage', icon: 'person' }
     
    ];
    this.listenToLoginEvents();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    console.log('logout noe');
    this.user.logout();
  }

  shouldShow(){
    return this.isLoggedIn;
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  listenToLoginEvents() {

    this.events.subscribe('user:login', () => {
      localStorage.setItem('hasLoggedIn', JSON.stringify(true));
      //this.setProfile();
      //this.enableMenu(true);
      this.isLoggedIn = true;
    });

    this.events.subscribe('user:signup', () => {
      //this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
     // localStorage.setItem('hasLoggedIn', JSON.stringify(false));
      //this.enableMenu(false);
      console.log('logout');
      this.isLoggedIn = false;
      this.nav.setRoot('LoginPage', {}, {animate: true});
    });
  }
}
