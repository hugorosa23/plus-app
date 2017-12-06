import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  onLogin(): void{
    this.navCtrl.push(LoginPage)
  }
  onCadastro(): void{
    this.navCtrl.push(CadastroPage)
  }

}
