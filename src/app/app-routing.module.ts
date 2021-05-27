import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./shared/module/serialnumber/serialnumber.module').then(m => m.SerialnumberModule)
  },
  {
    path: ':idqrcode',
    loadChildren: () => import('./shared/module/formpenjual/formpenjual.module').then(m => m.FormpenjualModule)
  },
  {
    path: 'welcome/:idqrcode',
    loadChildren: () => import('./shared/module/videopage/videopage.module').then(m => m.VideopageModule)
  },
  {
    path: 'customer/:idqrcode',
    loadChildren: () => import('./shared/module/formpembeli/formpembeli.module').then(m => m.FormpembeliModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./shared/module/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./shared/module/qrcode/qrcode.module').then(m => m.QrcodeModule),
    canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
