import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './widgets/button/button.component';
import { DualPaneComponent } from './dual-pane/dual-pane.component';
import { ButtonGroupComponent } from './widgets/button-group/button-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    DualPaneComponent,
    ButtonGroupComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
