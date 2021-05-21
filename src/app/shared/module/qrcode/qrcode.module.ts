import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxKjuaModule } from 'ngx-kjua';

import { QrcodeRoutes } from './qrcode.routing';
import { QrcodeComponent } from 'src/app/components/qrcode/qrcode.component';

@NgModule({
  declarations: [QrcodeComponent],
  imports: [
    CommonModule,
    QrcodeRoutes,
    FormsModule,
    NgxKjuaModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class QrcodeModule { }
