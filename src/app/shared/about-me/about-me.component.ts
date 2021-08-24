import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
