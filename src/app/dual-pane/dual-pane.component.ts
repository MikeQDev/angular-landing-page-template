import { Component, Input } from '@angular/core';

@Component({
  selector: 'lp-dual-pane',
  templateUrl: './dual-pane.component.html',
  styleUrls: ['./dual-pane.component.scss'],
})
export class DualPaneComponent {
  @Input() headline = '';
  @Input() description = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() buttons: any;
  @Input() orientation = 'left'; // or, left
  @Input() imageUrl = '';
  @Input() imageFirst = false; // or true
  @Input() imageOverflow = 'hidden'; // or visible
  @Input() imageWidth = 'auto';
  @Input() imageHeight = 'auto';
  @Input() imageTransform = 'none'; // or rotate(45deg);
}
