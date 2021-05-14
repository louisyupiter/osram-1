import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main.component';
import { RegisterfirstComponent } from './components/registerfirst/registerfirst.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    RegisterfirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
