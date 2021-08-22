import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http404',
  templateUrl: './http404.component.html',
  styleUrls: ['./http404.component.css'],
})
export class HTTP404Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
