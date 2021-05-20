import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { QrcodeComponent } from './components/qrcode/qrcode.component';

@NgModule({
  declarations: [
    MainComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
