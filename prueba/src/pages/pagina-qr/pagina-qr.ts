import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the PaginaQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina-qr',
  templateUrl: 'pagina-qr.html',
})
export class PaginaQrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController, public barcode:BarcodeScanner, private iab: InAppBrowser){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaQrPage');
  }

  leerCodigo(){
    console.log('hola gordito sexy');

    this.barcode.scan().then((barcodeData) => {
      const browser = this.iab.create(barcodeData.text);
      browser.show();
      this.presentToast(barcodeData.text);
     }, (err) => {
        console.log(err);
     });
  }

  presentToast(codigo) {
    let toast = this.toastCtrl.create({
      message: codigo,
      duration: 3000
    });
    toast.present();
  }

}
