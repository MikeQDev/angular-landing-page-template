/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'lp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() orientation = 'center'; // or, left
  @Input() @HostBinding('class.image-hide-on-mobile') imageHideOnMobile = true;
  @Input() headline = 'headline';
  @Input() staticHeadlineSize = ''; // if you don't want to grow/shrink on desktop; 32px for h1
  @Input() description = '';
  @Input() buttons: any; // TODO: secondary button color
  @Input() imageUrl = '';
  @Input() imageWidth = '15vw';
  @Input() imageTransform = 'none'; // or rotate(45deg);
  @Input() imageAltText = '';
  @Input() belowButtonText = '';
  @Input() submitSettings: any;
  emailAddress = '';

  constructor(private http: HttpClient) {}

  performSubmit(): void {
    if (this.isValidEmail()) {
      this.http
        .post<any>(this.submitSettings.target, {
          emailAddress: this.emailAddress,
        })
        .subscribe({
          next: (data) => {
            if (this.submitSettings.buttonClickAlertText) {
              window.alert(this.submitSettings.buttonClickAlertText);
            }
            if (this.submitSettings.location) {
              window.location = this.submitSettings.location;
            }
            this.emailAddress = '';
          },
          error: (error) => {
            window.alert('Issue submitting form - please contact admin');
          },
        });
    } else {
      window.alert('Please enter a valid email address');
    }
  }

  isValidEmail(): boolean {
    return new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/).test(
      this.emailAddress
    );
  }
}
