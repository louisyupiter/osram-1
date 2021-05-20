import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { VideopageRoutings } from './videopage.routing';
import { YoutubeComponent } from '../../../components/videopage/youtube/youtube.component';
import { VideopageComponent } from '../../../components/videopage/videopage.component';

@NgModule({
    declarations: [
        VideopageComponent,
        YoutubeComponent
    ],
    imports: [
        VideopageRoutings,
        SwiperModule
    ],
    providers: [],
    bootstrap: [],
})
export class VideopageModule { }
