import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexPageComponent } from '../app/components/index-page/index-page.component';
import { IdentificationComponent } from './components/identification/identification.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    IdentificationComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
