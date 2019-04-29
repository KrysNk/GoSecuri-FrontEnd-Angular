import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentificationComponent } from './components/identification/identification.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentificationComponent,
    IndexPageComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
