import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  dataPortfolio: Array<any> = [
    {
      asset: './assets/portfolio/pwa-pokemon.jpg',
      title: 'Pokemon Card Apps',
      description: 'Build an application using the angular framework with pokemon api. Also uses lazy loading images and PWAs to improve website performance'
    },
    {
      asset: './assets/portfolio/static-ecommerce.jpg',
      title: 'Static E Commerce Apps',
      description: 'Create a simple e commerce static website using html, css, js and bootstrap. Not too many features because it\'s just a static website'
    },
    {
      asset: './assets/portfolio/kabar-bola.jpg',
      title: 'Football Information Apps',
      description: 'Create a simple football schedule website with native javascript, pwa, and webpack. Don\'t forget to use push notifications with the help of firebase to push messages.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
