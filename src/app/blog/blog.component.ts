import { Location } from '@angular/common';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  currentPost$: Observable<ScullyRoute> = this.scullySvc.getCurrent();
  constructor(
    private router: Router,
    private scullySvc: ScullyRoutesService) {
  }

  ngOnInit(): void {
    console.log(this.currentPost$);
  }
}
