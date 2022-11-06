import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'curralis-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  @HostBinding('class') className = 'dark-theme';

  constructor() {}

  ngOnInit(): void {}
}
