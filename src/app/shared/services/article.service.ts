import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public blogs = new Subject<any>();
  constructor() { }

  public setData($data: any): any {
    this.blogs.next($data);
  }

  public getData(): Observable<any> {
    return this.blogs.asObservable();
  }

  public resetData(): any {
    this.blogs = new Subject();
  }
}
