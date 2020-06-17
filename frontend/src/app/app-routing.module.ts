import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReviewPageComponent} from "./review-page/review-page.component";
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {DescriptionComponent} from "./review-page/description/description.component";
import {DetailsComponent} from "./review-page/description/details/details.component";
import {IdeaComponent} from "./review-page/description/idea/idea.component";
import {NamingComponent} from "./review-page/description/naming/naming.component";
import {ProblemsComponent} from "./review-page/description/problems/problems.component";
import {DesignComponent} from "./review-page/design/design.component";
import {LogotypeComponent} from "./review-page/design/logotype/logotype.component";
import {BrandComponent} from "./review-page/design/brand/brand.component";
import {IdentityComponent} from "./review-page/design/identity/identity.component";
import {PrototypeComponent} from "./review-page/design/prototype/prototype.component";
import {ProductDesignComponent} from "./review-page/design/product-design/product-design.component";
import {DigitalDesignComponent} from "./review-page/design/digital-design/digital-design.component";


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      {
        path: 'review',
        component: ReviewPageComponent,
        children: [
          {
            path: 'description',
            component: DescriptionComponent,
            children: [
              { path: 'details', component: DetailsComponent },
              { path: 'idea', component: IdeaComponent },
              { path: 'naming', component: NamingComponent },
              { path: 'problems', component: ProblemsComponent }
            ]
          },
          {
            path: 'design',
            component: DesignComponent,
            children: [
              { path: 'logotype', component: LogotypeComponent },
              { path: 'brand', component: BrandComponent },
              { path: 'identity', component: IdentityComponent },
              { path: 'prototype', component: PrototypeComponent },
              { path: 'product', component: ProductDesignComponent },
              { path: 'digital', component: DigitalDesignComponent }
            ]
          }
        ]
      },
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
