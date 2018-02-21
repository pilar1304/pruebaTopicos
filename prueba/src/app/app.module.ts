import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {PaginaQrPage} from '../pages/pagina-qr/pagina-qr';
import { InAppBrowser } from '@ionic-native/in-app-browser';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaginaQrPage,
    InicioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaginaQrPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
