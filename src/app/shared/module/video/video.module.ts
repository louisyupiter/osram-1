import { NgModule } from '@angular/core';

import { VideopageRoutings } from './video.routing';
import { VideopageComponent } from '../../../components/videopage/videopage.component';

@NgModule({
    declarations: [
        VideopageComponent
    ],
    imports: [
        VideopageRoutings
    ],
    providers: [],
    bootstrap: [],
})
export class VideopageModule {}