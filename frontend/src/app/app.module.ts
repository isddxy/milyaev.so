import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { DescriptionComponent } from './review-page/description/description.component';
import { DesignComponent } from './review-page/design/design.component';
import { IdeaComponent } from './review-page/description/idea/idea.component';
import { ProblemsComponent } from './review-page/description/problems/problems.component';
import { DetailsComponent } from './review-page/description/details/details.component';
import { NamingComponent } from './review-page/description/naming/naming.component';
import { LogotypeComponent } from './review-page/design/logotype/logotype.component';
import { IdentityComponent } from './review-page/design/identity/identity.component';
import { BrandComponent } from './review-page/design/brand/brand.component';
import { PrototypeComponent } from './review-page/design/prototype/prototype.component';
import { ProductDesignComponent } from './review-page/design/product-design/product-design.component';
import { DigitalDesignComponent } from './review-page/design/digital-design/digital-design.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewPageComponent,
    DescriptionComponent,
    DesignComponent,
    IdeaComponent,
    ProblemsComponent,
    DetailsComponent,
    NamingComponent,
    LogotypeComponent,
    IdentityComponent,
    BrandComponent,
    PrototypeComponent,
    ProductDesignComponent,
    DigitalDesignComponent,
    ErrorPageComponent,
    MainLayoutComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
