import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'afifalfiano';

  constructor(
    private router: Router,
    private titleSvc: Title
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // (window as any).ga('set', 'page', event.urlAfterRedirects);
        // (window as any).ga('send', 'pageview');
        gtag('config', 'UA-121190015-4', {
          'page_path:': event.urlAfterRedirects
        });
      }
    });
  }

  public setTitle(newTitle: string = 'Afif Alfiano'): any {
    this.titleSvc.setTitle(newTitle);
  }
}
