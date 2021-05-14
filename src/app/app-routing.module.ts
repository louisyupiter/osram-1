import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'daftarpenjual',
  loadChildren: () => import('./shared/module/formpenjual/form.module').then(m => m.FormModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
