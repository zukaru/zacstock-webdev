import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './Main/Main.component';
import { HomeComponent } from './Pages/Home/Home.component';

export const AppRoutes: Routes = [
   {
      path: '',
      component: MainComponent,
      children: [
         {
            path: '',
            component: HomeComponent
         },
         {
            path: 'team',
            loadChildren: './Pages/Team/Team.module#TeamModule'
         },
         {
            path: 'portfolio',
            loadChildren: './Pages/Portfolio/Portfolio.module#PortfolioModule'
         },
         {
            path: 'services',
            loadChildren: './Pages/Services/Services.module#ServicesModule'
         },
         {
            path: 'session',
            loadChildren: './Pages/Session/Session.module#SessionModule'
         },
         {
            path: 'contact',
            loadChildren: './Pages/Contact/Contact.module#ContactModule'
         },
         {
            path: 'pages/faq',
            loadChildren: './Pages/Faq/Faq.module#FaqModule'
         },
         {
            path: 'pages/pricing',
            loadChildren: './Pages/Pricing/Pricing.module#PricingModule'
         },
         {
            path: 'pages/search',
            loadChildren: './Pages/Search/Search.module#SearchModule'
         },
         {
            path: 'about-us',
            loadChildren: './Pages/AboutUs/AboutUs.module#AboutUsModule'
         }
      ]
   }
];

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forRoot(AppRoutes)
   ],
   exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule { }
