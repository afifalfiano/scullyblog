import { Router } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isHome: boolean | undefined = true;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  this.checkRouter();
  }

  // tslint:disable-next-line:typedef
  checkRouter() {
    const url = this.router.url;
    console.log(url);
    if (url === 'home') {
      this.isHome = true;
      this.router.navigateByUrl('/home');
    } else if (url === 'myblogs') {
      this.isHome = false;
    }
  }

}
