import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {InspirationsPageComponent} from "./inspirations-page/inspirations-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {MyprojectsPageComponent} from "./myprojects-page/myprojects-page.component";
import {AboutmePageComponent} from "./aboutme-page/aboutme-page.component";


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'about-me', component: AboutmePageComponent },
      { path: 'my-projects', component: MyprojectsPageComponent },
      { path: 'inspirations', component: InspirationsPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'error', component: ErrorPageComponent },
      { path: '**', redirectTo: 'error'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
