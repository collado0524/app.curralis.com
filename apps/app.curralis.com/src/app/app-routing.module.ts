import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NxWelcomeComponent } from './modules/main/components/nx-welcome/nx-welcome.component';


const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
  path: '', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
  },
  { path: '**', redirectTo: 'wall' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
