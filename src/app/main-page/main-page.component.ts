import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  template:'<app-navbar></app-navbar><app-he-exhi></app-he-exhi> <router-outlet></router-outlet> <app-footer></app-footer>',
  styleUrls: ['../../app/app.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
