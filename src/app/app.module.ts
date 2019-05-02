import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { IdentificationComponent } from './components/identification/identification.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    IdentificationComponent,
    IndexPageComponent,
    LoginAdminComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
