import { fadeInAnimation } from './../animation/_animation';
import { Router } from '@angular/router';
import { Component, ElementRef, ErrorHandler, OnInit, Type, ViewChild } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { state, trigger, transition, animate, style } from '@angular/animations';
import { Location } from '@angular/common';
import Typed from 'typed.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    transition('rest => hover', animate('400ms ease-in')),
    transition('hover => rest', animate('200ms ease-out')),

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
  @ViewChild('myName') myName: ElementRef | undefined;
  currentState: Array<any> = [];
  links$: Observable<ScullyRoute[]> = this.scullySvc.available$;

  formFeedback: any;
  underMaintenance = false;
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
      tech: 'figma',
      style: 'btn-outline-primary'
    },
    {
      tech: 'adobe xd',
      style: 'btn-outline-dark'
    },
    {
      tech: 'inkscape',
      style: 'btn-outline-secondary'
    },
    {
      tech: 'gimp',
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
  myPortfolio: Array<any> = [
    {
      label: 'Pokemon Card PWA',
      link: 'https://pokemon-card-pwa.vercel.app/',
      image: '../assets/img.jpg',
      description: 'Build an application using the angular framework with pokemon api. Also uses lazy loading images and PWAs to improve website performance',
      feature: ['PWA', 'Lazy Loading', 'Pagination']
    },
    {
      label: 'Statis E Commerce',
      link: 'https://afifalfiano.github.io/alfiano-store/',
      image: '../assets/img.jpg',
      description: 'Create a simple e commerce static website using html, css, js and bootstrap. Not too many features because it\'s just a static website',
      feature: ['Responsive', 'UI/UX', 'Design']
    },
    {
      label: 'Kabar Bola',
      link: 'https://kabar-bola-fde85.web.app/',
      image: '../assets/img.jpg',
      description: 'Create a simple football schedule website with native javascript, pwa, and webpack. Don\'t forget to use push notifications with the help of firebase to push messages.',
      feature: ['PWA', 'MaterializeCSS', 'Offline-First']
    },
  ];
  constructor(
    private scullySvc: ScullyRoutesService,
    private router: Router,
    private error: ErrorHandler,
    private location: Location,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    if (history.state.data !== undefined) {
      this.pureBlog = history.state.data;
    } else {
      this.getBlog();
    }
    this.runnerText();
    this.onInitForm();
    // console.log(this.pureBlog);
  }

  // tslint:disable-next-line:typedef
  runnerText(): void {
    const options = {
      strings: ['', '^1000 <strong>Hello friends!</strong> ^1000', '<strong>My Name is Afif Alfiano</strong> ^1000', '<strong>Nice to meet you!</strong>', '<strong>Afif Alfiano</strong>'],
      typeSpeed: 60,
      backSpeed: 30,
      showCursor: false,
      backDelay: 700
    };

    const typed = new Typed('.element', options);

    // const a = document.getElementById('myName');
    // a?.replaceWith('Afif Alfiano');
    // console.log(a);
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
      // console.log(this.pureBlog);
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
    // console.log($event);
    const name = $event.target.innerText;
    const toolbar = $event.target.className;
    const changeFormat = name.replace(' ', '').toLowerCase();
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

  onInitForm(): any {
    this.formFeedback = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email] ],
      message: ['', [Validators.required]]
    });
  }

  onSubmit(): any {
    this.underMaintenance = true;
    setTimeout(
      () => {
        this.formFeedback.reset();
      }, 2000
    );
    // console.log(this.formFeedback);
  }
}

