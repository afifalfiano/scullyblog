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

})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scullySvc.available$;
  blogs: any = [];
 constructor(
  private scullySvc: ScullyRoutesService,
  private router: Router,
  private error: ErrorHandler,
  private location: Location
 ) {}
 ngOnInit(): void {
   this.getBlog();
 }

 getBlog(): any {
  this.links$.subscribe((link) => {
    this.blogs.push(link);
  }, (error: any) => {
    this.error.handleError(error);
  });
}

goToTop(): any {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
}

