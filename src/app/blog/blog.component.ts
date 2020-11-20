import { Location } from '@angular/common';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  currentPost$: Observable<ScullyRoute> = this.scullySvc.getCurrent();
  constructor(
    private router: Router,
    private scullySvc: ScullyRoutesService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const slug = this.router.url;
    localStorage.setItem('slug', slug);
    console.log(this.currentPost$);
  }

  // tslint:disable-next-line:typedef
  getBlog() {
    const getSlug: any = localStorage.getItem('slug');
    const splitSlug = getSlug.split('/');
    const toString = splitSlug[2].toString();
    console.log(toString);
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
  goBack() {
    this.router.navigateByUrl('/home');
  }
}
