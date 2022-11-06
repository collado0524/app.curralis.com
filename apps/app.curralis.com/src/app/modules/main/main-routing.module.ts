import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ThemeViewComponent } from './components/theme-view/theme-view.component';
import { AdsWallComponent } from './components/ads-wall/ads-wall.component';
import { NxWelcomeComponent } from './components/nx-welcome/nx-welcome.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { PageComponent } from '../pages/components/page/page.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'wall',
        component: AdsWallComponent,
      },
      {
        path: 'page/:slug',
        component: PageComponent,
      },
      {
        path: 'catalogue',
        component: CatalogueComponent,
      },
      {
        path: 'theme',
        component: ThemeViewComponent,
      },
      {
        path: 'welcome',
        component: NxWelcomeComponent,
      },
      {
        path: 'post', loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule)
      },
      { path: '', redirectTo: 'wall', pathMatch: 'full' },
      { path: '**', redirectTo: 'wall' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
