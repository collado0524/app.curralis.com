import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/app.curralis.com/src/environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get(environment.apiUrl+"api/posts?populate=*");
  }
  getPostById() {}
  createPosts() {}
  removePostById() {}
  deletePosts() {}

}
