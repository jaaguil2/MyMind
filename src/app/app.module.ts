import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { MainComponent } from './main/main.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLinksComponent,
    LoginComponent,
    SignUpComponent,
    NavMainComponent,
    MainComponent,
    ThoughtsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
