import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinsModalComponent } from './coins-modal/coins-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import LocaleFr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

registerLocaleData(LocaleFr);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoinsComponent,
    CoinsModalComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
