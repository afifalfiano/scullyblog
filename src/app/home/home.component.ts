import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('home') home: ElementRef | undefined;
  @ViewChild('aboutme') aboutme: ElementRef | undefined;
  @ViewChild('experience') experience: ElementRef | undefined;
  @ViewChild('portfolio') portfolio: ElementRef | undefined;
  @ViewChild('blog') blog: ElementRef | undefined;
  @ViewChild('contact') contact: ElementRef | undefined;
  links$: Observable<ScullyRoute[]> = this.scullySvc.available$;

  myStack: Array<any> = [
    {
      tech: 'php'
    },
    {
      tech: 'html'
    },
    {
      tech: 'css'
    },
    {
      tech: 'javascript'
    },
    {
      tech: 'typescript'
    },
    {
      tech: 'wordpress'
    },
    {
      tech: 'laravel'
    },
  ];
  pureBlog: Array<any> = [];
  constructor(private scullySvc: ScullyRoutesService) { }

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
      this.home?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    } else if (changeFormat === 'aboutme') {
      this.aboutme?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    } else if (changeFormat === 'experience') {
      this.experience?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    } else if (changeFormat === 'portfolio') {
      this.portfolio?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    } else if (changeFormat === 'blog') {
      this.blog?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    } else if (changeFormat === 'contact') {
      this.contact?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    } else {
      this.home?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }

  // tslint:disable-next-line:typedef
  goToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
