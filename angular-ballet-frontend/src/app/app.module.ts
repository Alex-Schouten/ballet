import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketSearchComponent } from './ticket-search/ticket-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    HomeComponent,
    MessageComponent,
    TicketDetailComponent,
    TicketSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
