import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {
  videoList = [
    {
      title: 'Web Accessibility',
      description: 'Web accessibility adalah website yang kontennya dirancang agar dapat diakses dengan mudah termasuk oleh penyandang disabilitas.',
      link: 'https://www.youtube.com/embed/bpGIUOrK7cg',
      file: 'https://speakerdeck.com/afifalfiano/web-accessibility',
      isFile: true
    },
    {
      title: 'Tutorial Menggunakan Cypress di Angular',
      description: 'Pada kesempatan kali ini kita akan belajar bersama-sama bagaimana cara menggunakan cypress di Angular khususnya untuk e2e test',
      link: 'https://www.youtube.com/embed/Ervwl-EONSc',
      file: 'https://github.com/afifalfiano/research-cypress',
      isFile: true
    },
    {
      title: 'Testing on Frontend',
      description: 'Berbicara mengenai testing tentu ada banyak hal seperti unit, integrate dan e2e test. Mari kita pelajari secara general seperti apa itu testing',
      link: 'https://www.youtube.com/embed/nKeQ0yam8ps',
      file: 'https://speakerdeck.com/afifalfiano/testing-on-frontend',
      isFile: true
    },
    {
      title: 'Angular CLI with Bazel',
      description: 'Bazel adalah sebuah tool yang dapat meningkatkan performa dan optimize proses building di production maupun development. Metode unggulan bazel adalah first cache.',
      link: 'https://www.youtube.com/embed/DOc3VBQNgZ8',
      file: 'https://speakerdeck.com/afifalfiano/angular-cli-with-bazel',
      isFile: true
    },
    {
      title: 'BSI CoffeeTalk #7 Curiosity, menantang diri sendiri',
      description: 'Pada kesempatan kali ini saya dan mas sigit akan berbagi cerita bagaimana awal mula menjadi developer',
      link: 'https://www.youtube.com/embed/ASa3o0elXiA',
      file: '/talks',
      isFile: false
    },
  ];
  sanitizeVideo!: { title: string; description: string; link: SafeResourceUrl; file: any; isFile: any; }[];
  constructor(
    private dom: DomSanitizer
  ) { }

  ngOnInit(): void {
    const sanitizer = this.videoList.map(item => {
      const sanitize = this.dom.bypassSecurityTrustResourceUrl(item.link);
      const sanitize2 = this.dom.bypassSecurityTrustResourceUrl(item.file);
      return {
        title: item.title,
        description: item.description,
        link: sanitize,
        file: sanitize2,
        isFile: item.isFile
      };
    });
    this.sanitizeVideo = sanitizer;
  }

}
