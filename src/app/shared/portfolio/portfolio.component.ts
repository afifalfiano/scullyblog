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
      description: 'Build an application using the angular framework with pokemon api. Also uses lazy loading images and PWAs to improve website performance',
      url: 'https://github.com/afifalfiano/pokemonCard'
    },
    {
      asset: './assets/portfolio/static-ecommerce.jpg',
      title: 'Static E-commerce Apps',
      description: 'Create a simple e commerce static website using html, css, js and bootstrap. Not too many features because it\'s just a static website',
      url: 'https://github.com/afifalfiano/alfiano-store'
    },
    {
      asset: './assets/portfolio/kabar-bola.jpg',
      title: 'Football Information Apps',
      description: 'Create a simple football schedule website with native javascript, pwa, and webpack. Don\'t forget to use push notifications with the help of firebase to push messages.',
      url: 'https://github.com/afifalfiano/third-pwa-submission'
    },
    {
      asset: 'https://restaurant-responsive-xi.vercel.app/images/hero-image-large.jpg',
      title: 'Restaurant Apps',
      description: 'Submission on course become frontend expert developer on dicoding with pwa, indexdb, testing and optimezing ',
      url: 'https://github.com/afifalfiano/restaurant-responsive'
    },
    {
      asset: './assets/portfolio/fast-wa.png',
      title: 'Fast-WA',
      description: 'Simply app to contact other people with whatsapp without saving number',
      url: 'https://github.com/afifalfiano/unsave-contact-wa'
    },
    {
      asset: './assets/portfolio/pilarng.png',
      title: 'PilarNg',
      description: 'Contributor component chips and font pilar on pilarng.github.io',
      url: 'https://pilarng.github.io/'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
