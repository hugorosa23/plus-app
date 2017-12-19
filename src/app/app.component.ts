import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { EventosPage } from '../pages/eventos/eventos';
import { CalendarioPage } from '../pages/calendario/calendario';
import { LugaresPage } from '../pages/lugares/lugares';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
        // used for an example of ngFor and navigation
        this.pages = [
          { title: 'Home', component: MenuPage },
          { title: 'Eventos', component: EventosPage},
          { title: 'Calendário', component: CalendarioPage},
          { title: 'Lugares', component: LugaresPage},
          { title: 'Configurações', component: ConfiguracaoPage},
          { title: 'Sair', component: HomePage }
        ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

