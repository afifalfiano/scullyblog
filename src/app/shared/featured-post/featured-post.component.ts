import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {
  @Input() recentBlogs: any;
  data: any = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.recentBlogs);
    setTimeout(
      () => {
        this.onlyGetBlog();
        console.log(this.data, 'dat');
      }, 3000
    );
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
