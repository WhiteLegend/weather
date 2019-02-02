import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatDrawer,MatDrawerContainer,MatFormField,MatLabel,MatSelect,MatOption} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminloginComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    // MatDrawer,
    // MatDrawerContainer,
    // MatFormField,
    // MatLabel,
    // MatSelect,
    // MatOption
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
