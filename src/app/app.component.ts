import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landing-page';

  // header
  headerHeadline = 'headline';
  headerDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius accumsan
    diam et finibus. Ut bibendum urna ex, quis tempus urna semper ac. Vivamus ac
    mi non nunc eleifend sagittis vel ut dui. Etiam eleifend nunc augue. Nunc
    viverra magna lacus, vel semper ipsum sodales sed. Aliquam non vulputate dui.
    Aenean semper nunc et dolor sollicitudin, eu elementum odio maximus. Vivamus
    pellentesque placerat risus.`;
  imageCss =
    "url('https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')";
  headerButtons = [
    { text: 'buttonA', href: 'https://google.com' },
    { text: 'buttonB', href: 'https://google.com' },
  ];
  belowButtonText = 'No credit card required.';
}
