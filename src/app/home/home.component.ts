import { fadeInAnimation } from './../animation/_animation';
import { Router } from '@angular/router';
import { Component, ElementRef, ErrorHandler, OnInit, Type, ViewChild } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { state, trigger, transition, animate, style } from '@angular/animations';
import { Location } from '@angular/common';
import Typed from 'typed.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scullySvc.available$;
  blogs: any = [];
 constructor(
  private scullySvc: ScullyRoutesService,
  private router: Router,
  private error: ErrorHandler,
  private location: Location,
  public articleSvc: ArticleService
 ) {}
 ngOnInit(): void {
   this.getBlog();
 }

 getBlog(): any {
  this.links$.subscribe((link) => {
    const getBlog = link.map((item: any) => {
      if (item.route.match(/blog/g) && item.route !== '/myblogs') {
          return item;
      }
    });
    const onlyBlog = getBlog.filter(blog => {
        return blog !== undefined;
    });
    this.blogs = [...onlyBlog];
    this.articleSvc.setData(this.blogs);
    localStorage.setItem('articles', JSON.stringify(this.blogs));
  }, (error: any) => {
    this.error.handleError(error);
  });
}

goToTop(): any {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
}

