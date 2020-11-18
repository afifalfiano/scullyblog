import { Route, Router } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

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
    ) { }

  ngOnInit(): void {
    this.getBlog();
    if (this.pureBlog === [] || this.pureBlog === null) {
      this.router.navigateByUrl('/');
    }
  }

  // tslint:disable-next-line:typedef
  getBlog() {
    this.links$.subscribe((link) => {
      this.pureBlog = link;
      this.isLoaded = true;
      this.pureBlog.splice(1, 1);
      this.pureBlog.pop();
      this.pureBlog.shift();
      this.pureBlog.pop();
      console.log(this.pureBlog);
    });
  }

  // tslint:disable-next-line:typedef
  scrollSmooth($event: any) {
    console.log($event);
    const name = $event.target.computedName;
    let changeFormat = name.replace(' ', '').toLowerCase();
    changeFormat = 'home';
    console.log(changeFormat);
    if (changeFormat === 'home') {
      this.router.navigateByUrl('/#home');
    } else {
      this.router.navigateByUrl('/');
    }
  }

  // tslint:disable-next-line:typedef
  sendSlug() {
    // localStorage.setItem('slug', $event);
  }

}
