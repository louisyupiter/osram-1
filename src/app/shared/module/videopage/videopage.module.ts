import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { VideopageRoutings } from './videopage.routing';
import { YoutubeComponent } from '../../../components/videopage/youtube/youtube.component';
import { VideopageComponent } from '../../../components/videopage/videopage.component';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    VideopageComponent,
    YoutubeComponent
  ],
  imports: [
    CommonModule,
    VideopageRoutings,
    SwiperModule,
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
export class VideopageModule { }
