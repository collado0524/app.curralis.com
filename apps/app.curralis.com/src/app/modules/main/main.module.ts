import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { ThemeViewComponent } from './components/theme-view/theme-view.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { AdsWallComponent } from './components/ads-wall/ads-wall.component';
import { PageComponent } from '../pages/components/page/page.component';
import { PostComponent } from '../posts/components/post/post.component';

@NgModule({
  declarations: [
    MainComponent,
    AdsWallComponent,
    PageComponent,
    CatalogueComponent,
    ThemeViewComponent,
    //PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MainRoutingModule,
    MaterialModule,
    NgxMasonryModule,   
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
