import { Component, HostListener, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { PostService } from '../../../posts/services/post.service';

@Component({
  selector: 'ads-wall',
  templateUrl: './ads-wall.component.html',
  styleUrls: ['./ads-wall.component.scss'],
})
export class AdsWallComponent {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 0,
    percentPosition: true,
  };

  //@ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
  posts: any = [] ;
  masonryImages = [];
  limit = 15;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (res) => {
        this.posts = res;        
        console.log(this.posts.data);
      },
      (error) => console.log(error)
    );

    /*setTimeout(() => {
      this.masonryImages = this.cards.slice(0, this.limit);
    },1000);
*/
  }
  public showMorePost() {}
}
