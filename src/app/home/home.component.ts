import { fadeInAnimation } from './../animation/_animation';
import { Router } from '@angular/router';
import { Component, ElementRef, ErrorHandler, OnInit, ViewChild } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { state, trigger, transition, animate, style } from '@angular/animations';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation,
  trigger('changeState', [
    state('rest', style({
      transform: 'scale(1)'
    })),
    state('hover', style({
      transform: 'scale(1.1)'
    })),
    state('press', style({
      transform: 'scale(1.5)',
    })),
    transition('rest => hover', animate('400ms ease-in')),
    transition('hover => rest', animate('200ms ease-out')),
    transition('hover => press', animate('400ms ease-in')),
    transition('press => rest', animate('200ms ease-out')),

  ])],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@fadeInAnimation]': '' }

})
export class HomeComponent implements OnInit {
  @ViewChild('home') home: ElementRef | undefined;
  @ViewChild('aboutme') aboutme: ElementRef | undefined;
  @ViewChild('experience') experience: ElementRef | undefined;
  @ViewChild('portfolio') portfolio: ElementRef | undefined;
  @ViewChild('blog') blog: ElementRef | undefined;
  @ViewChild('contact') contact: ElementRef | undefined;
  currentState = ['rest'];
  currentCard = false;
  links$: Observable<ScullyRoute[]> = this.scullySvc.available$;

  myStack: Array<any> = [
    {
      tech: 'php',
      style: 'btn-outline-primary'
    },
    {
      tech: 'html',
      style: 'btn-outline-success'
    },
    {
      tech: 'css',
      style: 'btn-outline-danger'
    },
    {
      tech: 'javascript',
      style: 'btn-outline-warning'
    },
    {
      tech: 'typescript',
      style: 'btn-outline-primary'
    },
    {
      tech: 'wordpress',
      style: 'btn-outline-info'
    },
    {
      tech: 'laravel',
      style: 'btn-outline-danger'
    },
    {
      tech: 'Figma',
      style: 'btn-outline-primary'
    },
    {
      tech: 'Adobe Xd',
      style: 'btn-outline-dark'
    },
    {
      tech: 'Inkscape',
      style: 'btn-outline-secondary'
    },
    {
      tech: 'Gimp',
      style: 'btn-outline-success'
    }
  ];
  pureBlog: Array<any> = [];
  project: Array<any> = [
    {
      name: 'UI Design',
      height: '200px',
      card: '',
      image: '../../assets/img.jpg'
    },
    {
      name: 'PWA Native',
      height: '300px',
      card: '',
      image: '../../assets/img.jpg'
    },
    {
      name: 'Angular Bazel',
      height: '200px',
      card: '',
      image: '../../assets/img.jpg'
    },
    {
      name: 'Angular Bazel',
      height: '400px',
      card: 'margin-top: -4em',
      image: '../../assets/img.jpg'
    },
    {
      name: 'Angular Bazel',
      height: '300px',
      card: 'margin-top: 2em',
      image: '../../assets/img.jpg'
    },
    {
      name: 'Angular Bazel',
      height: '400px',
      card: 'margin-top: -4em',
      image: '../../assets/img.jpg'
    },
  ];
  thumbnailArticle: Array<any> = [];
  constructor(
    private scullySvc: ScullyRoutesService,
    private router: Router,
    private error: ErrorHandler,
    private location: Location
    ) { }

  ngOnInit(): void {
    if (history.state.data !== undefined) {
      this.pureBlog = history.state.data;
    } else {
      this.getBlog();
    }

    console.log(this.pureBlog);
  }

  // tslint:disable-next-line:typedef
  getBlog() {
    this.links$.subscribe((link) => {
      // this.thumbnailArticle.push(link);
      // this.thumbnailArticle.splice(0, 5);
      link.forEach(item => {
          this.thumbnailArticle.push(item);
          this.pureBlog.push(item);
        });
      this.pureBlog.shift();
      this.pureBlog.shift();
      this.pureBlog.pop();
      this.pureBlog.pop();
      this.pureBlog.pop();
      this.pureBlog.pop();
      // // this.pureBlog.splice(0, 4);
      // console.log(this.thumbnailArticle);
      console.log(this.pureBlog);
    }, (error: any) => {
      this.error.handleError(error);
    });
  }

  // tslint:disable-next-line:typedef
  sendSlug() {
    // const datas = this.thumbnailArticle;
    // datas.shift();
    // datas.shift();
    // datas.pop();
    // datas.pop();
    // history.pushState(datas, this.router.url);
  }

  // tslint:disable-next-line:typedef
  scrollSmooth($event: any) {
    console.log($event);
    const name = $event.target.computedName;
    const toolbar = $event.target.className;
    const changeFormat = name.replace(' ', '').toLowerCase();
    console.log(changeFormat);
    if (changeFormat === 'home') {
      this.home?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      this.router.navigateByUrl('/#home');
    } else if (changeFormat === 'aboutme') {
      this.aboutme?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      this.router.navigateByUrl('/#aboutme');
    } else if (changeFormat === 'experience') {
      this.experience?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      this.router.navigateByUrl('/#experience');
    } else if (changeFormat === 'portfolio') {
      this.portfolio?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      this.router.navigateByUrl('/#portfolio');
    } else if (changeFormat === 'blog') {
      this.blog?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    } else if (changeFormat === 'contact') {
      this.contact?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      this.router.navigateByUrl('/#contact');
    } else if (toolbar === 'navbar-toggler-icon'){
      // this.home?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      // this.router.navigateByUrl('/#home');
    } else {
      this.home?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      this.location.back();
    }
  }

  // tslint:disable-next-line:typedef
  goToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  // tslint:disable-next-line:typedef
  goToBlogs() {

      const datas = this.thumbnailArticle;
      datas.shift();
      datas.shift();
      datas.pop();
      datas.pop();
      this.router.navigate(['/myblogs'], {state: {data: datas}});
      window.scrollTo({top: 0, behavior: 'auto'});
  }

  // tslint:disable-next-line:typedef
  goToPortfolios() {
    this.router.navigateByUrl('/myportfolios');
  }

  // tslint:disable-next-line:typedef
  changeMouseState($event: any, i: number): void {
    this.currentState[i] = $event;
  }
}
