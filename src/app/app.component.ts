import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { mudarStilo } from 'src/main';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sys-TCF-Angular';
  constructor(private router: Router) {
    router.events
      // ****************************************
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd | any) => {
        switch (event.url) {
          case '/units/aedsins':
            mudarStilo('#E82886');
            break;

          case '/units/metaverse':
            mudarStilo('#69318C');
            break;

          case '/units/qled':
            mudarStilo('#45C4B0');
            break;

          case '/units/about':
            mudarStilo('#DBF227');
            break;

          default:
            mudarStilo('#fff');
            break;
        }
      });
  }
}
