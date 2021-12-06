import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landing-page';

  // Reusable variables for demo
  imageUrl = 'https://i.stack.imgur.com/E4ke6.png';
  loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius accumsan
    diam et finibus. Ut bibendum urna ex, quis tempus urna semper ac. Vivamus ac
    mi non nunc eleifend sagittis vel ut dui.`;
  buttons = [
    { text: 'buttonA', href: 'https://google.com' },
    { text: 'buttonB', href: 'https://google.com' },
  ];

  // header
  headerHeadline = 'Angular Landing Page Template';
  imageCss = `url('${this.imageUrl}')`;
  headerDescription = this.loremIpsum;
  headerButtons = this.buttons;
  belowButtonText = 'No credit card required.';
  submitSettings = {
    target: 'https://192.168.1.170:8000/signup', // don't forget to rate-limit this server-side to avoid spam!
    buttonText: 'Sign up!',
    buttonClickAlertText: 'Thanks for signing up!',
    textFieldCssWidth: '10',
  };

  // dual-pane content
  dualPaneheader = 'Dual-pane header';
  dualPaneDescription = this.loremIpsum;
  dualPaneImageUrl = this.imageUrl;
  dualPaneButtons = this.buttons;

  // grid content
  gridContent = {
    contentType: 'content',
    items: [
      {
        header: 'xyz',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis nibh, vitae elementum eros bibendum ac. Nam sit amet quam urna. Morbi diam orci, varius eu consequat ut, semper eu urna. Praesent id lacus neque. Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
      {
        header: 'xyz',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis nibh, vitae elementum eros bibendum ac. Nam sit amet quam urna. Morbi diam orci, varius eu consequat ut, semper eu urna. Praesent id lacus neque. Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
      {
        header: 'xyz',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis nibh, vitae elementum eros bibendum ac. Nam sit amet quam urna. Morbi diam orci, varius eu consequat ut, semper eu urna. Praesent id lacus neque. Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
      {
        header: 'xyz',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula felis nibh, vitae elementum eros bibendum ac. Nam sit amet quam urna. Morbi diam orci, varius eu consequat ut, semper eu urna. Praesent id lacus neque. Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
    ],
  };
  testimonialContent = {
    contentType: 'testimonial',
    title: 'What people are saying',
    items: [
      {
        name: 'Person A',
        title: "Person's title",
        testimonial:
          'Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
      {
        name: 'Person B',
        title: "Person's title",
        testimonial:
          'Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
      {
        name: 'Person C',
        title: "Person's title",
        testimonial:
          'Sed a porta nisl. Aenean egestas leo lectus, quis tempus urna eleifend et. Vestibulum enim turpis, ultricies ut laoreet quis, placerat eu enim. Curabitur at aliquet mauris.',
      },
    ],
  };
}
