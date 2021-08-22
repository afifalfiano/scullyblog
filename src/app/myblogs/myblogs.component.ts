import { Component, OnInit, ElementRef, ViewChild, ErrorHandler, OnDestroy } from '@angular/core';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css'],
})
export class MyblogsComponent implements OnInit {
  myblogs: any = [];
  previewBlog: any = [];
  p = 1;
  isLoaded = false;
  categoryData = [
    {
      category: 'Technology',
      class: 'bg-primary text-white'
    },
    {
      category: 'Design',
      class: 'bg-danger text-white'
    },
    {
      category: 'Dream',
      class: 'bg-secondary text-white'
    },
    {
      category: 'Improvement',
      class: 'bg-warning text-white'
    },
    {
      category: 'Methodology',
      class: 'bg-primary text-white'
    },
  ];
  constructor(
    private error: ErrorHandler,
    public articleSvc: ArticleService,
    ) {
     }

  ngOnInit(): any {
    this.getBlog();
  }

  getBlog(): any {
    const dataLocal = localStorage.getItem('articles');
    if (dataLocal) {
      this.myblogs = JSON.parse(dataLocal);
      this.previewBlog.push(this.myblogs[0]);
      console.log(this.previewBlog);
    }
  }

}
