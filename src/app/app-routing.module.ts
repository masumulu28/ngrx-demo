import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core/core.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'login',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
