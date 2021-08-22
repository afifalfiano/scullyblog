import { fadeInAnimation, slideInOutAnimation } from './../animation/_animation';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { Component, OnInit, ElementRef, ViewChild, ErrorHandler, OnDestroy } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css'],
})
export class MyblogsComponent implements OnInit {
  // links$: Observable<ScullyRoute[]> = this.scullySvc.available$;
  myblogs: any = [];
  p = 1;
  isLoaded = false;
  constructor(
    private scullySvc: ScullyRoutesService,
    private error: ErrorHandler,
    public articleSvc: ArticleService,
    private routes: ActivatedRoute
    ) {
      // this.routes.data.subscribe(res => console.log(res));
     }

  ngOnInit(): any {
    this.getBlog();
  }

  getBlog(): any {
    const dataLocal = localStorage.getItem('articles');
    if (dataLocal) {
      this.myblogs = JSON.parse(dataLocal);
    }
  }

}
