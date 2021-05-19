import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'bengkel',
    loadChildren: () => import('./shared/module/formpenjual/form.module').then(m => m.FormModule)
  },
  {
    path: 'videopage',
    loadChildren: () => import('./shared/module/video/video.module').then(m => m.VideopageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
