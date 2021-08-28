import { Location } from '@angular/common';
import {AfterViewChecked, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { HighlightService } from '../shared/services/highlight.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit, AfterViewChecked {
  currentPost$: Observable<ScullyRoute> = this.scullySvc.getCurrent();
  allPost: any = [];
  p = 1;
  constructor(
    private router: Router,
    private scullySvc: ScullyRoutesService,
    private highlightService: HighlightService
    ) {
  }

  ngOnInit(): void {
    this.getAllPost();
    this.addClassActive();
  }

  addClassActive(): void {
    const url = this.router.url.match('/blog/');
    if (url) {
      const menu = document.querySelectorAll('.nav-item');
      menu.forEach(item => {
        if (item.textContent === 'Blog') {
          item.classList.add('active');
        }
      });
    }
  }

  ngAfterViewChecked(): any {
    this.highlightService.highlightAll();
  }

  getAllPost(): any {
    const dataLocal = localStorage.getItem('articles');
    if (dataLocal) {
      this.allPost = JSON.parse(dataLocal);
    }
  }

  onPrev(): void{

  }

  onNext(): void {

  }
}
