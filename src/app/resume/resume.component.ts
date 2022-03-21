import { Component } from '@angular/core';
import { ListItem } from './list/list-item.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  constructor() {}

  expDetails: ListItem[] = [
    {
      header: 'Application Developer at Koniag Government Services',
      subheader: 'Oct 2020 - Present',
      items: [
        'Develop React and React Native applications using Typescript, Material UI, and GraphQL for the USDA Animal Health Services application which included a mobile app,  web app,  and desktop app with more than 200 backend services all  hosted on Azure DevCloud',
        'Coordinate with a team of remote developers to deliver solutions by prioritizing tasks based on the feedback of quality assurance, project management, and client resources',
        'Provide technical guidance and practice pair programming with teammates to find and resolve bugs',
        'Leverage GraphQL queries, mutations, and subscriptions for accessing business data for data display',
        'Standardize form validations across mobile and web applications using Formik libraries',
        'Boost stability and speed of application by creating performance tests and graphical analysis to determine compute bottlenecks',
        'Assist in developing and testing SQLite database for mobile app',
        'Maintain and publish private packages',
      ],
    },
    {
      header: 'Front-end Developer at Operation Spark',
      subheader: 'Nov 2019 - Oct 2020',
      items: [
        'Modernize legacy app to optimize performance, agility, and scalability',
        'Build automated tests with Cucumber and Selenium to validate UI functionality',
        'Develop complex CSV importing capability that automatically maps columns based on data sampling to comply with logical data design',
      ],
    },
    {
      header: 'Teaching Assistant at Operation Spark',
      subheader: 'Nov 2019',
      items: [
        'Assist instructors with their duties to teach students to learn foundational coding skills and concepts',
      ],
    },
  ];

  projDetails: ListItem[] = [
    {
      header: 'DoMo Macro Pad',
      items: [
        'Create and maintain an open-source keyboard that supports a rotary encoder and OLED display',
        'Integrate QMK Firmware in C to enable full programmability so that each key and switch is customizable',
      ],
    },
    {
      header: 'Rising Waters',
      items: [
        'Develop an Angular app using Node.js and PostgreSQL that route users through non-flooded areas',
        'Leverage elevation, weather, maps, and local government report APIs to coordinate routes',
      ],
    },
    {
      header: 'reContruct',
      items: [
        'Contribute to React app using MySQL, Express, and Bootstrap for people to share supply to reduce waste',
      ],
    },
  ];

  eduDetails: ListItem[] = [
    {
      header:
        'IBC Fundamentals of JavaScript, Functional Programming, and Web Development at Operation Spark Boot Camp',
      subheader: 'Oct 2019',
    },
  ];

  certDetails: ListItem[] = [
    {
      header:
        'AWS Certified Cloud Practitioner, Microsoft Certified: Azure Fundamentals',
    },
  ];

  skillDetails: ListItem[] = [
    {
      header:
        'JavaScript, Typescript, React, Angular, HTML/CSS, Git, Agile Software Development',
    },
  ];
}
