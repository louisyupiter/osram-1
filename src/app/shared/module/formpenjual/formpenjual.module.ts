import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';

import { FormPenjualComponent } from '../../../components/registerfirst/formpenjual/formpenjual.component';
import { FormPenjualRouting } from './formpenjual.routing';

@NgModule({
    declarations: [
        FormPenjualComponent,
    ],
    imports: [
        CommonModule,
        FormPenjualRouting,
        ReactiveFormsModule,
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
export class FormpenjualModule {

}
