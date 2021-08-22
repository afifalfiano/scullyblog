import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { MyblogsModule } from '../myblogs/myblogs.module';
import { SharedModule } from './shared.module';

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
