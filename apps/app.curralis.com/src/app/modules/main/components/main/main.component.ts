import { Component, HostBinding,  OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl} from '@angular/forms';

interface MenuItem {
  label:string;
  link:string;
  icon:string; 
}

@Component({
  selector: 'curralis-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {  

  @HostBinding('class') className = 'dark-theme';

  toggleControl = new FormControl(false);  
  
  menuItems : MenuItem[]=[
    {link:"/wall",label:"Mural",icon:"dashboard"},
    {link:"/page",label:"Página",icon:"home"},
    {link:"/calatogue",label:"Catálogo",icon:"person"},
    //{link:"/theme",label:"Sorteo",icon:"card_giftcard"},
    //{link:"/theme",label:"Galeria",icon:"wallpaper"},
    //{link:"/auth/register",label:"Register",icon:"send"},
    //{link:"/auth/login",label:"Login",icon:"more_horiz"}
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void{  
    /*window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change' , event => {
      this.className = event.matches ? 'light-theme':'dark-theme';
    });*/
    //this.changeTheme();
  }
  changeTheme():void{
    this.toggleControl.valueChanges.subscribe(val =>{
      this.className = val ? 'light-theme':'dark-theme';
    });

  }
  constructor(
    private breakpointObserver: BreakpointObserver, 
    public overlatContainer: OverlayContainer,
  ) {
    
  }

}
