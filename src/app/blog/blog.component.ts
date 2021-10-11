import { DOCUMENT, Location } from '@angular/common';
import {AfterViewChecked, Component, Inject, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
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
    private highlightService: HighlightService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document
    ) {
  }

  ngOnInit(): void {
    this.getAllPost();
    this.addClassActive();
    this.renderComment();
  }

  renderComment(): any {
    const script = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.repo = 'afifalfiano/scullyblog' ;
    this.currentPost$.subscribe((res) => {
      script.async = true;
      script.defer = true;
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'afifalfiano/scullyblog');
      script.setAttribute('issue-term', res.route);
      script.setAttribute('theme', 'github-dark');
      script.setAttribute('crossorigin', 'anonymous');
      const comment = this.document.getElementById('comment');
      if (comment) {
        this.renderer2.appendChild(comment, script);
      }
    });
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
