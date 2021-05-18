import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main.component';
import { RegisterfirstComponent } from './components/registerfirst/registerfirst.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DatapembeliComponent } from './components/registerfirst/datapembeli/datapembeli.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    RegisterfirstComponent,
    DatapembeliComponent,
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
