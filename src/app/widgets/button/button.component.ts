import { Component, Input } from '@angular/core';

@Component({
  selector: 'lp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = '';
  @Input() href = '';
}
