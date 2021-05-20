import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormpembeliComponent } from 'src/app/components/registerfirst/formpembeli/formpembeli.component';

const routes: Routes = [
  { path: '', component: FormpembeliComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormpembeliRouting { }
