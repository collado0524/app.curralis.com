import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { PagesService } from '../../../pages/services/pages.service';

interface Page {
  title: string;
            subtitle: string;
            description: string;
            banner: string;
}

@Component({
  selector: 'curralis-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  apiUrl = environment.apiUrl;
  apiUploads = environment.apiUploads;  
  slug: string;
  page: Page;
  temp: any;
  constructor(
    private route: ActivatedRoute,
    private pages: PagesService
  ) {   
    this.slug = ""; 
    this.page = {
      title: "",
      subtitle: "",
      description: "",
      banner: ""
    };
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {      
        const slug = params.get('slug')?.toString() || "";
        this.pages.getPageBySlug(slug).subscribe( res =>{
          this.temp = res;
          console.log(this.temp);
          this.page = {
            title: this.temp.data[0].attributes.title,
            subtitle: this.temp.data[0].attributes.subtitle,
            description: this.temp.data[0].attributes.description,
            banner: this.apiUploads+this.temp.data[0].attributes.banner.data.attributes.url
          };          
          console.log(this.page);
        })
      }
    )
  }
}
