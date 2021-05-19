import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideopageComponent } from '../../../components/videopage/videopage.component';

const routes: Routes = [
    { path: '', component: VideopageComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideopageRoutings { }
