/* eslint-disable @typescript-eslint/no-explicit-any */
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
  @Input() description = 'description';
  @Input() buttons: any; // TODO: secondary button color
  @Input() imageUrl = '';
  @Input() imageWidth = '15vw';
  @Input() imageTransform = 'none'; // or rotate(45deg);
  @Input() imageAltText = '';
  @Input() belowButtonText = '';
  @Input() submitSettings: any;

  performSubmit(event: any): void {
    // TODO: consider using angular (reactive) form. Just be aware of bundle size increase...
    // Or move this form iteration to ngOnInit; but beware load time may increase?
    // Can also getElementById, but this is probably expensive, and conflicts with multiple occurrences
    let form = undefined;
    let formTextField = undefined;
    for (const formElementPath of event.path) {
      if (formElementPath instanceof HTMLFormElement) {
        form = formElementPath as HTMLFormElement;
        for (const childNode of Array.from(form.childNodes)) {
          if (childNode instanceof HTMLInputElement) {
            formTextField = childNode;
            break;
          }
        }
        break;
      }
    }
    const emailAddress = formTextField?.value as string;
    if (form && formTextField) {
      // ensure form and field were found
      if (this.validateEmail(emailAddress)) {
        form?.submit();
        form?.reset();
        if (this.submitSettings.buttonClickAlertText) {
          window.alert(this.submitSettings.buttonClickAlertText);
        }
      } else {
        window.alert('Please enter a valid email address');
      }
    } else {
      window.alert('Issue submitting email address; please contact admin');
    }
  }

  validateEmail(email: string): boolean {
    return new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/).test(email);
  }
}
