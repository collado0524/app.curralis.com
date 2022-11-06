import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'curralis-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => console.log(res), error => console.log(error));
  }
}
