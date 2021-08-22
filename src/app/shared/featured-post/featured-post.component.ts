import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {
  recentBlog: any = [];
  constructor(
    private router: Router,
    private articleSvc: ArticleService
  ) { }

  ngOnInit(): void {
    this.onlyGetBlog();
  }

  goToBlogs(): any {
    this.router.navigateByUrl('/myblogs');
  }

  onlyGetBlog(): any {
    this.articleSvc.getData().subscribe((response: any) => {
      const data = response;
      const dataBlog = data.map((item: any, index: number) => {
          if (index < 3) {
            return item;
          }
      });
      const dataFix = dataBlog.filter((item: any) => item !== undefined);
      this.recentBlog = dataFix;
    });
  }

}
