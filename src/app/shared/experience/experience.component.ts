import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  myExperience: Array<any> = [
    {
      position: 'Frontend Dev',
      time: '20 August, 2020',
      description: 'Implementation of a design product to the web application. (On the frontend developer, we use an Angular framework.'
    },
    {
      position: 'UI/UX Designer',
      time: '20 February, 2020',
      description: 'Create a product design for a system BPM with the scrum method'
    },
    {
      position: 'IT Support',
      time: '1 January, 2019',
      description: 'Work at BSI UII on IT Support position. BSI uses a lot of technology to build systems at UII and makes clear networks and extraordinary.'
    },
    {
      position: 'Technician PT.TA',
      time: '1 October, 2017',
      description: 'Following the PKL (Field Work / Apprenticeship) program from SMK N 2 Yogyakarta for 3 months at PT. Telkom Access. Many things can be taken from these street vendors, such as how to splicing optical fiber, installing a new indihome internet connection, becoming a help desk, getting to know the internet network, knowing what ODP, ODC, Splicer, FO, and others. Perform network maintenance when an error occurs or natural factors. That\'s great an experience.'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
