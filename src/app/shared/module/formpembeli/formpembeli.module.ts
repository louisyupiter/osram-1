import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormpembeliComponent } from 'src/app/components/registerfirst/formpembeli/formpembeli.component';
import { FormpembeliRouting } from './formpembeli.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';

@NgModule({
  declarations: [FormpembeliComponent],
  imports: [
    CommonModule,
    FormpembeliRouting,
    ReactiveFormsModule,
    SweetAlert2Module,
    TextMaskModule,
    NgxLoaderIndicatorModule.forRoot({
      img: '../../../../assets/other/spinner.png',
      loaderStyles: {
        background: 'rgba(255, 255, 255, 0.8)',
      },
      imgStyles: {
        width: '100px',
        // background: 'yellow',
      },
      rotate: {
        duration: 5000,
        direction: 'reverse'
      },
    })
  ],
  providers: [],
  bootstrap: [],
})
export class FormpembeliModule { }
