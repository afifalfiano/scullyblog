import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation/_animation';

@Component({
  selector: 'app-http404',
  templateUrl: './http404.component.html',
  styleUrls: ['./http404.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@fadeInAnimation]': '' }
})
export class HTTP404Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  scrollSmooth($event: any) {
    // console.log($event);
    const name = $event.target.innerText;
    const changeFormat = name.replace(' ', '').toLowerCase();
    // console.log(changeFormat);
    if (typeof changeFormat === 'string') {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/']);
    }
  }


}
