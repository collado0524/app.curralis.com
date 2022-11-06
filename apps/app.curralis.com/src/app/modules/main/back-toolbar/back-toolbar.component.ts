import { Component, Input, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'back-toolbar',
  providers:[Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './back-toolbar.component.html',
  styleUrls: ['./back-toolbar.component.scss']
})
export class BackToolbarComponent implements OnInit {
  @Input() currentLink: any;
  @Input() enableBackButton: any;
  location: Location;
  constructor( 
    location: Location
  ) {
    this.location = location;
   }

  ngOnInit(): void {
    
  }

}
