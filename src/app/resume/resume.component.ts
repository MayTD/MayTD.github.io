import { Component } from '@angular/core';
import { ListItem } from './list/list-item.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  constructor() {}

  // Preserve original property order
  originalOrder = (a: any, b: any) => {
    return a;
  };

  details: Record<string, ListItem[]> = {
    skills: [
      {
        header:
          'JavaScript, Typescript, React, Angular, HTML/CSS, Git, Agile Software Development',
      },
    ],
    experience: [
      {
        header: 'Software Engineer at Target',
        subheader: 'Aug 2022 - present',
        items: [
          'Develop Electron apps with React and Redux designed to help team members navigate activities done at Guest Service including returns, ATM money management, price lookups, and payin/payout',
          'Drive stand-up meetings and act as point-of-contact engineer for Guest Service apps',
          'Manage deployments to production of nearly 2000 stores than handles over 3 million transactions daily',
          'Author technical documentations and guides for training and general development',
          'Provide technical guidance and practice pair programming with teammates to find and resolve bugs',
        ],
      },
      {
        header: 'UI Developer at Koniag Government Services',
        subheader: 'Mar 2022 - Aug 2022',
        items: [
          'Develop a digital records management system that included support services to scan, tag, store, and control electronic records using React and KendoReact UI library',
          'Design wireframes and prototypes of user interfaces with inVision and Figma',
          'Coordinate with a team of remote developers to deliver solutions by prioritizing tasks based on the feedback of quality assurance, project management, and client resources',
        ],
      },
      {
        header: 'Application Developer at Koniag Government Services',
        subheader: 'Oct 2020 - Mar 2022',
        items: [
          'Develop React and React Native apps for mobile, web, and desktop using Typescript, Material UI, and GraphQL for the USDA Animal Health Services that uses over 200 backend services all hosted on Azure',
          'Leverage GraphQL and SQLite queries, mutations, and subscriptions to access data for display',
          'Standardize form validations across mobile and web applications using Formik libraries',
          'Boost stability and speed of app by creating performance tests to determine compute bottlenecks',
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
    ],
    projects: [
      {
        header: 'Arcade Typing',
        items: [
          'A simple web game made with Django that measures accuracy, speed, and time of typing on a keyboard',
        ],
      },
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
    ],
    certifications: [
      {
        items: [
          'Operation Spark Boot Camp IBC Fundamentals of JavaScript, Functional Programming, and Web Development',
          'AWS Certified Cloud Practitioner',
          'Microsoft Certified: Azure Fundamentals',
        ],
      },
    ],
  };
}
