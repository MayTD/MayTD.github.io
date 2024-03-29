import { Component } from '@angular/core';
import { Card } from './card/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}

  cardsList: Card[] = [
    {
      title: 'Arcade Typing',
      description:
        'A simple typing game that measures accuracy, speed, and time to test your typing skills. Made with Django framework.',
      src: '../../../assets/img/typing.png',
      alt: 'Photo of Arcade Typing app',
    },
    {
      title: 'DoMo Macro Pad',
      description:
        'A custom 3x3 keyboard that supports a rotary encoder and OLED display. Made with KiCad for PCB design and integrated with QMK Firmware in C for more customizability.',
      src: '../../../assets/img/keyboard.png',
      alt: 'Photo of a keyboard',
    },

    {
      title: 'SimpleHOA',
      description:
        "A home owner association management system with the self-serve tools to maintain manager's workspace. The project was a web application made with MySQL, Express, React, and Node.js. and Bootstrap.",
      src: '../../../assets/img/hoa.png',
      alt: 'Photo of simpleHOA app',
    },
    {
      title: 'reConctruct',
      description:
        'An app that connects contractors and construction workers to share supplies to reduce waste. The project was a web application made with MySQL, Express, React, and Node.js.',
      src: '../../../assets/img/reConstruct.png',
      alt: 'Photo of reConstruct app',
    },
    {
      title: 'Rising Waters',
      description:
        'API driven web app that helps people navigate through non-flooded areas of New Orleans. Made with Angular, Node.js, Express, PostgreSQL, and Angular Material.',
      src: '../../../assets/img/risingwaters.png',
      alt: 'Photo of Rising Waters app',
    },
    {
      title: 'Your project here...',
      description: 'Want to create a project together? Lets connect!',
      buttonText: 'Contact Me',
      buttonHref: '/about',
    },
  ];
}
