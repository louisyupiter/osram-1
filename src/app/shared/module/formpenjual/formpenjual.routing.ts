import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPenjualComponent } from '../../../components/registerfirst/formpenjual/formpenjual.component';

const routes: Routes = [
    { path: ':idqrcode', component: FormPenjualComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormPenjualRouting { }
