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
    experience: [
      {
        header: 'Software Engineer at Target',
        subheader: 'Aug 2022 - present',
        bullets: [
          'Develop and maintain Electron apps and shared libraries using React and Redux to power core register workflows, including sales, returns, ATM management, price lookups, and pay-in/payout operations',
          'Lead frontend development efforts, facilitating daily stand-ups and acting as a point-of-contact engineer for cross-team collaboration across backend, product, UX, and store operations',
          'Manage deployments to production of nearly 2000 stores supporting over 3 million transactions daily through CI/CD pipelines leveraging Docker, GitHub Actions, and Vela',
          'Build modular UI components with React Hooks and integrate them with backend RESTful APIs',
          'Create monitoring dashboards with Grafana and Kibana that expose real-time metrics, error trends, and transaction health',
          'Author technical documentations to strengthen engineering standards, consistency, and knowledge',
          'Provide technical guidance through pair programming, code reviews, and onboarding',
          'Contribute to production stability by leading incident responses, writing RCAs, and implementing fixes to prevent recurrence',
        ],
      },
      {
        header: 'UI Developer at Koniag Government Services',
        subheader: 'Mar 2022 - Aug 2022',
        bullets: [
          'Implement full-stack development of a digital records management system leveraging React, Node.js, and KendoReact UI to deliver a solution for scanning, tagging, storage, and access control',
          'Collaborated cross-functionally with product managers, QA, and design teams to define visual and interaction standards, iterating on designs in Figma to validate key features and optimize app usability',
        ],
      },
      {
        header: 'Application Developer at Koniag Government Services',
        subheader: 'Oct 2020 - Mar 2022',
        bullets: [
          'Engineer and deliver a React and React Native app (web, IOS, and Android) for USDA Animal Health Services, designed to consolidate and synchronize data sourced from over 200 Azure microservices',
          'Design the local data persistence layer using SQLite for offline functionality and state management, ensuring application reliability and data integrity even when disconnected from the central GraphQL API',
          'Spearheaded component library governance by building and publishing private npm packages for UI consistency and accelerating development velocity',
        ],
      },
      {
        header: 'Front-end Developer at Operation Spark',
        subheader: 'Nov 2019 - Oct 2020',
        bullets: [
          'Develop reusable interfaces using TypeScript and React, ensuring stability and scalability of all frontend views built on the Material UI design system',
          'Implement end-to-end testing and unit testing with Selenium and Jest for application reliability and code coverage',
        ],
      },
    ],
    Projects: [
      {
        header: 'Arcade Typing',
        subheader: 'Python, Django',
        description:
          'A simple typing game that measures accuracy, speed, and time to test your typing skills.',
      },
      {
        header: 'DoMo Macropad',
        subheader: 'C, QMK',
        description:
          'A custom 3x3 keyboard that supports a rotary encoder and OLED display. Made with KiCad for PCB design and integrated with QMK Firmware in C for more customizability.',
      },
      {
        header: 'ReConstruct',
        subheader: 'React, Node.js, Express, MySQL',
        description:
          'An app that connects contractors and construction workers to share supplies to reduce waste. Since a large percentage of our overall waste comes from construction projects yet most construction components are made of recyclable material, there is much opportunity to reduce waste. By creating an open platform that bridges the gap between people and available material, there is less need to dispose more materials.',
      },
      {
        header: 'Rising Waters',
        subheader: 'Angular, Node.js, Express, PostgreSQL',
        description:
          'When flash floods inundate New Orleans, driving becomes difficult or even impossible. This app solves this problem by routing users through non-flooded areas to their destination. The routes takes into account of low elevation levels, 311 reports, crowd-sourced user reports, and precipitation levels so that the user is traveling as safely as possible.',
      },
      {
        header: 'SimpleHOA',
        subheader: 'React, Node.js, Express, MySQL',
        description:
          "A home owner association management system with the self-serve tools to maintain manager's workspace. It helps fulfill duties such as maintaining dues and properties from community members. It also handles administrative work like scheduling, assigning roles, and budgeting. This is a full-scale tool that automates property management.",
      },
    ],
    Education: [
      {
        header:
          'Loyola University New Orleans,  Bachelor of Science in Computer Science',
      },
    ],
    skills: [
      {
        header:
          'JavaScript (ES6+), Typescript, React, Angular, Node.js,  HTML/CSS, RESTful APIs, Jest, Git, Agile Methodology',
      },
    ],
    certifications: [
      {
        bullets: [
          'Operation Spark Boot Camp IBC Fundamentals of JavaScript, Functional Programming, and Web Development',
          'AWS Certified Developer - Associate',
        ],
      },
    ],
  };
}
