import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scullySvc.available$;
  constructor(private scullySvc: ScullyRoutesService) { }

  ngOnInit(): void {
    this.links$.subscribe((link) => {
      console.log(link);
    });
  }

}
