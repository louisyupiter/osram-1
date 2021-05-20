import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormPenjualComponent } from '../../../components/registerfirst/formpenjual/formpenjual.component';
import { FormPenjualRouting } from './formpenjual.routing';

@NgModule({
    declarations: [
        FormPenjualComponent,
    ],
    imports: [
        CommonModule,
        FormPenjualRouting,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [],
})
export class FormpenjualModule {

}
