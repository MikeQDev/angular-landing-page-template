import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderCenterComponent } from './header/header-center/header-center.component'
import { ButtonComponent } from './widgets/button/button.component'

@NgModule({
  declarations: [AppComponent, HeaderCenterComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
