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
  constructor(
    private scullySvc: ScullyRoutesService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getBlog();
  }

  // tslint:disable-next-line:typedef
  getBlog() {
    this.links$.subscribe((link) => {
      this.pureBlog = link;
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
    const changeFormat = name.replace(' ', '').toLowerCase();
    console.log(changeFormat);
    if (changeFormat === 'home') {
      this.router.navigateByUrl('/#home');
    } else if (changeFormat === 'aboutme') {
      this.router.navigateByUrl('/#aboutme');
    } else if (changeFormat === 'experience') {
      this.router.navigateByUrl('/#experience');
    } else if (changeFormat === 'portfolio') {
      this.router.navigateByUrl('/#portfolio');
    } else if (changeFormat === 'blog') {
      this.router.navigateByUrl('/#blog');
    } else if (changeFormat === 'contact') {
      this.router.navigateByUrl('/#contact');
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
