import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormpembeliComponent } from 'src/app/components/registerfirst/formpembeli/formpembeli.component';
import { FormpembeliRouting } from './formpembeli.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [FormpembeliComponent],
  imports: [
    CommonModule,
    FormpembeliRouting,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [],
})
export class FormpembeliModule { }
