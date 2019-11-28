import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {ToolbarComponent} from './toolbar/toolbar.component';

import {routes} from './app-routing/routes';
import {CatalogComponent} from './catalog/catalog.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CartComponent} from './cart/cart.component';
import {CatalogService} from './services/catalog.service';
import {HttpClientModule} from '@angular/common/http';
import { CartOverlayComponent } from './cart-overlay/cart-overlay.component';
import {CartService} from './services/cart.service';
import {CookieService} from 'ngx-cookie-service';

import 'reflect-metadata';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CatalogComponent,
    HomeComponent,
    CartComponent,
    CartOverlayComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CatalogService, CartService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
