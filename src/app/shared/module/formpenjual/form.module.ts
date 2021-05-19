import { NgModule } from '@angular/core';

import { FormPenjualComponent } from '../../../components/registerfirst/formpenjual/formpenjual.component';
import { FormPenjualRouting } from './form.routing';

@NgModule({
    declarations: [
        FormPenjualComponent,
    ],
    imports: [
        FormPenjualRouting,
    ],
    providers: [],
    bootstrap: [],
})
export class FormModule {

}
