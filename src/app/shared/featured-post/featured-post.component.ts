import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {
  @Input() recentBlogs: any;
  data: any = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.recentBlogs);
    setTimeout(
      () => {
        this.onlyGetBlog();
        console.log(this.data, 'dat');
      }, 3000
    );
  }

  goToBlogs(): any {
    this.router.navigateByUrl('/myblogs');
  }

  onlyGetBlog(): any {
    this.recentBlogs[0].forEach((item: { route: string; }, index: number) => {
      if (item.route.match(/blog/g) && item.route !== '/myblogs') {
        if (index <= 4) {
          this.data.push(item);
        }
      }
    });
  }

}
