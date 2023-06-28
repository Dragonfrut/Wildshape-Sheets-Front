import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './core/components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './public/components/login/login.component';
import { RegisterComponent } from './public/components/register/register.component';
import { HomeComponent } from './public/components/home/home.component';
import { DefaultsheetComponent } from './private/components/defaultsheet/defaultsheet.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DefaultsheetComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
