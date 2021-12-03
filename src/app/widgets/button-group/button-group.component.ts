import { Component, Input } from '@angular/core';

@Component({
  selector: 'lp-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() buttons: any;
}
