/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { mobileWidth } from '../../variables';

@Component({
  selector: 'lp-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() baseColumns = 4; // for desktop use
  @Input() bordered = false; // vertical borders separating items
  @Input() orientation = 'center'; // or left
  @Input() content: any;
  contentType: any;
  gridItems: any;
  title = '';

  columns = 1; // default mobile columns

  ngOnInit(): void {
    this.resizeColumns();
    this.gridItems = this.content.items;
    this.contentType = this.content.contentType;
    this.title = this.content.title;
  }

  @HostListener('window:resize')
  resizeColumns() {
    // since we can't pass variables influenced by @media directly to CSS
    const innerWidth = window.innerWidth;
    if (innerWidth > mobileWidth) {
      // desktop
      this.columns = this.baseColumns;
    } else if (innerWidth >= mobileWidth - 600) {
      // a little less than mobile
      this.columns = Math.ceil(this.baseColumns / 2);
    } else {
      // mobile
      this.columns = 1;
    }
  }
}
