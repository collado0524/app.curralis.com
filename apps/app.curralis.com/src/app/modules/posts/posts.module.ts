import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, PostsRoutingModule],
  providers: [PostService],
})
export class PostsModule {}
