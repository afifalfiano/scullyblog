import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-portfolios',
  templateUrl: './my-portfolios.component.html',
  styleUrls: ['./my-portfolios.component.css']
})
export class MyPortfoliosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

    // tslint:disable-next-line:typedef
    scrollSmooth($event: any) {
      console.log($event);
      const name = $event.target.computedName;
      const changeFormat = name.replace(' ', '').toLowerCase();
      console.log(changeFormat);
      if (typeof changeFormat === 'string') {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/']);
      }
    }

}
