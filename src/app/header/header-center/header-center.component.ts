import { Component, HostBinding, Input, OnInit } from '@angular/core'

@Component({
  selector: 'lp-header-center',
  templateUrl: './header-center.component.html',
  styleUrls: ['./header-center.component.scss'],
})
export class HeaderCenterComponent implements OnInit {
  @Input() orientation = 'center' // or, left
  @HostBinding('class.displayImage') displayImage = false
  @Input() headline = 'headline'
  @Input() description = 'description'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() buttons: any // TODO: secondary button color
  @Input() imageCss = 'none'

  ngOnInit(): void {
    this.displayImage = this.orientation !== 'center'
  }
}
