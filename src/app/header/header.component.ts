/* eslint-disable @typescript-eslint/no-explicit-any */
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
  @Input() buttons: any; // TODO: secondary button color
  @Input() imageCss = 'none';
  @Input() belowButtonText = '';
  @Input() submitSettings: any;
  ngOnInit(): void {
    this.displayImage = this.orientation !== 'center';
  }
}
