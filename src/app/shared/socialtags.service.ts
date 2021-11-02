import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Injectable({
  providedIn: 'root'
})
export class SocialtagsService {

  public constructor(private titleService: Title,
                     private router: Router,
                     private activatedRoute: ActivatedRoute,
                     private scully: ScullyRoutesService,
                     private meta: Meta) {
                       this.doUpdateMeta();
                     }

      doUpdateMeta(): any {
        this.scully.getCurrent().subscribe(
          link => {
            if (link?.title) {
              this.meta.updateTag({ name: 'og:title', property: 'og:title', content: link.title });
              this.meta.updateTag({ name: 'og:description', property: 'og:description', content: link.thumbnailText});
              this.meta.updateTag({ name: 'og:image', content: `${window.location.hostname}/${link.image}` });
            }
          });
      }
}
