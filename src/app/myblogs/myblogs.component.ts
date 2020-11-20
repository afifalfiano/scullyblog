import { ActivatedRoute, Route, Router } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { Component, OnInit, ElementRef, ViewChild, ErrorHandler } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {
  @ViewChild(HomeComponent) home: ElementRef | undefined;
  links$: Observable<ScullyRoute[]> = this.scullySvc.available$;
  pureBlog: Array<any> = [];
  p = 1;
  isLoaded = false;
  constructor(
    private scullySvc: ScullyRoutesService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private error: ErrorHandler
    ) {
    // const data = this.router.getCurrentNavigation()?.extras.state;
    // console.log(data);
    // this.pureBlog = history.state.data;
    // this.getBlog();
     }

  ngOnInit(): any {
    // this.getBlog();
    if (this.pureBlog === [] || this.pureBlog === null) {
      this.location.back();
    }
    if (history.state.data !== undefined) {
      this.pureBlog = history.state.data;
      this.pureBlog.pop();
    } else {
      // this.location.back();
      this.getBlogNew();
    }
    // tslint:disable-next-line:no-unused-expression
    // this.checkUrl();
  }

  // tslint:disable-next-line:typedef
  getBlogNew() {
    this.links$.subscribe(link => {
      link.forEach(item => {
        this.pureBlog.push(item);
      });
      this.pureBlog.splice(0, 2);
      this.pureBlog.unshift();
      this.pureBlog.unshift();
      this.pureBlog.pop();
      this.pureBlog.pop();
      this.pureBlog.pop();
    }, (error: any) => {
      this.error.handleError(error);
    });
  }

  // tslint:disable-next-line:typedef
  scrollSmooth($event: any) {
    console.log($event);
    const name = $event.target.computedName;
    const changeFormat = name.replace(' ', '').toLowerCase();
    console.log(changeFormat);
    const spliceData = this.pureBlog.splice(0, 3);
    if (typeof changeFormat === 'string') {
      this.router.navigate(['/home'], {state: {data: spliceData}});
    } else {
      this.router.navigate(['/'], {state: {data: spliceData}});
    }
  }

  // tslint:disable-next-line:typedef
  sendSlug() {
    // localStorage.setItem('slug', $event);
  }
}
