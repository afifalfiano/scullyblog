import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Observable<string>> {
  constructor(private articleSvc: ArticleService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    const data = localStorage.getItem('articles');
    return this.articleSvc.setData(data);
  }
}
