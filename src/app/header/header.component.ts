import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() orientation = 'center'; // or, left
  @HostBinding('class.displayImage') displayImage = false;
  @Input() headline = 'headline';
  @Input() description = 'description';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() buttons: any; // TODO: secondary button color
  @Input() imageCss = 'none';
  @Input() belowButtonText = '';

  ngOnInit(): void {
    this.displayImage = this.orientation !== 'center';
  }
}
