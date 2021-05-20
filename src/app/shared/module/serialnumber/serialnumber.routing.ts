import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerialnumberComponent } from 'src/app/components/serialnumber/serialnumber.component';

const routes: Routes = [
  { path: '', component: SerialnumberComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SerialnumberRoutes { }
