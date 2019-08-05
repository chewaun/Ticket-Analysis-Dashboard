import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { TickettrendComponent } from './tickettrend/tickettrend.component';


@NgModule({
  declarations: [
    AppComponent,
    TicketlistComponent,
    TickettrendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
