import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-a',
  templateUrl: './nav-a.component.html',
  styleUrls: ['./nav-a.component.css']
})
export class NavAComponent implements OnInit {
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
