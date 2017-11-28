import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';

import { CadastroPage } from '../pages/cadastro/cadastro';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCaZK96fPUcK0b3yEcbZt_65nMrxKkYoIQ",
  authDomain: "plus-184222.firebaseapp.com",
  databaseURL: "https://plus-184222.firebaseio.com",
  projectId: "plus-184222",
  storageBucket: "plus-184222.appspot.com",
  messagingSenderId: "674650131622"
};

@NgModule({
  declarations: [
    CadastroPage,
    HomePage,
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CadastroPage,
    HomePage,
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
