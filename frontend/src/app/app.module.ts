import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InspirationsPageComponent } from './inspirations-page/inspirations-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutmePageComponent } from './aboutme-page/aboutme-page.component';
import { MyprojectsPageComponent } from './myprojects-page/myprojects-page.component';
import { HeaderComponent } from './shared/components/main-layout/header/header.component';
import { NavComponent } from './shared/components/main-layout/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    MainLayoutComponent,
    HomePageComponent,
    InspirationsPageComponent,
    ContactPageComponent,
    AboutmePageComponent,
    MyprojectsPageComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
