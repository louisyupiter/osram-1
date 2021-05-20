import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SerialnumberComponent } from 'src/app/components/serialnumber/serialnumber.component';
import { SerialnumberRoutes } from './serialnumber.routing';

@NgModule({
  declarations: [SerialnumberComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SerialnumberRoutes
  ],
  providers: [],
  bootstrap: [],
})
export class SerialnumberModule { }
