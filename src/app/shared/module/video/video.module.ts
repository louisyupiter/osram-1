import { NgModule } from '@angular/core';

import { VideopageRoutings } from './video.routing';
import { YoutubeComponent } from '../../../components/videopage/youtube/youtube.component';
import { VideopageComponent } from '../../../components/videopage/videopage.component';

@NgModule({
    declarations: [
        VideopageComponent,
        YoutubeComponent
    ],
    imports: [
        VideopageRoutings
    ],
    providers: [],
    bootstrap: [],
})
export class VideopageModule {}