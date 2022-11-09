import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/app.curralis.com/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(
    private http: HttpClient

  ) { }
  getPageById(id:string){
    return this.http.get(`${environment.apiUrl}api/pages/${id}?populate=*`);
  }
  getPageBySlug(slug:string){
    return this.http.get(`${environment.apiUrl}api/pages?filters[slug][$eq]=${slug}&populate=*`);
  }
}
