import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { SocialtagsService } from './shared/socialtags.service';
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
    private titleSvc: Title,
    private tagsService: SocialtagsService
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
    this.tagsService.doUpdateMeta();
  }

  public setTitle(newTitle: string = 'Afif Alfiano'): any {
    this.titleSvc.setTitle(newTitle);
  }

  getMeta(): any {
    const title = document.querySelector('meta[property=\'og:title\'')?.getAttribute('content');
    const desc = document.querySelector('meta[property=\'og:description\'')?.getAttribute('content');
    const image = document.querySelector('meta[property=\'og:image\'')?.getAttribute('content');
    const url = document.querySelector('meta[property=\'og:url\'')?.getAttribute('content');
    return {title, desc, image, url};
}
}
