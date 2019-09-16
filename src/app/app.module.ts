import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AppComponent } from './app.component';
import { MainComponent } from './Main/Main.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { AppRoutingModule } from './app-routing.module';
import { WidgetsModule } from './Widgets/Widgets.module';
import { MenuComponent } from './Layouts/Menu/HeaderMenu/HeaderMenu/HeaderMenu.component';
import { HeaderOneComponent } from './Layouts/Header/HeaderOne/HeaderOne.component';
import { TemplateModule } from './Template/Template.module';
import { FooterOneComponent } from './Layouts/Footer/FooterOne/FooterOne.component';
import { FooterMenuComponent } from './Layouts/Menu/FooterMenu/FooterMenu/FooterMenu.component';
import { MenuItems } from './Core/Menu/MenuItems/MenuItems';
import { DropletService } from './Services/Droplet.service';
import { StickyheaderComponent } from './Layouts/Header/StickyHeader/StickyHeader.component';
import { CtaToolbarComponent } from './cta-toolbar/cta-toolbar.component';
import { DeactivateGuardService } from './deactivate-guard.service';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      HomeComponent,
      MenuComponent,
      HeaderOneComponent,
      FooterOneComponent,
      FooterMenuComponent,
      StickyheaderComponent,
      CtaToolbarComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      WidgetsModule,
      TemplateModule,
      HttpClientModule,
      LoadingBarRouterModule,
      LoadingBarModule
   ],
   providers: [
      MenuItems,
      DropletService,
      DeactivateGuardService
   ],
   exports: [],
   bootstrap: [AppComponent]
})

export class AppModule { }
