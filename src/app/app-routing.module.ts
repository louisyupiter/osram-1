import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrcodeComponent } from './components/qrcode/qrcode.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./shared/module/serialnumber/serialnumber.module').then(m => m.SerialnumberModule)
  },
  {
    path: 'bengkel',
    loadChildren: () => import('./shared/module/formpenjual/formpenjual.module').then(m => m.FormpenjualModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./shared/module/videopage/videopage.module').then(m => m.VideopageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./shared/module/formpembeli/formpembeli.module').then(m => m.FormpembeliModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./shared/module/qrcode/qrcode.module').then(m => m.QrcodeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
