import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { AuthRoutings } from './auth.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    AuthRoutings,
    CommonModule,
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
export class AuthModule { }
