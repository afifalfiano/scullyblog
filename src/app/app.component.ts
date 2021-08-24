import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
// tslint:disable-next-line:ban-types

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afifalfiano';

  constructor(
    private router: Router
  ) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     (window as any).ga('set', 'page', event.urlAfterRedirects);
    //     (window as any).ga('send', 'pageview');
    //   }
    // });
  }
}
