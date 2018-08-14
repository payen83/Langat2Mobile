import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/List/List';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { ApiProvider } from '../providers/api/api';
import { LoginPageModule } from '../pages/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { MainPage } from '../pages/main/main';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    ProfilePageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ApiProvider
  ]
})
export class AppModule {}
