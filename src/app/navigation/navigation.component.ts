import { Router } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isHome: boolean | undefined = true;
  onlyHome: boolean | undefined = true;
  checkingCondition: any;
  constructor(
    private router: Router
  ) { }
  ngOnDestroy(): void {
    // clearInterval(this.checkingCondition);
  }

  ngOnInit(): void {
  this.checkRouter();
  // this.checkingCondition = setInterval(
  //   () => {
  //     this.checkRouter();
  //   }, 1000
  // );
  }


  // tslint:disable-next-line:typedef
  checkRouter() {
    const url = this.router.url;
    console.log(url);
    if (url === 'home') {
      this.isHome = true;
      this.onlyHome = true;
      this.router.navigateByUrl('/home');
    } else if (url === 'myblogs' || url === 'myportfolios'){
      this.isHome = false;
      this.onlyHome = false;
    }
  }

}
