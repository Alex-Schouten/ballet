import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { MessageComponent } from './messages/message.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketSearchComponent } from './ticket-search/ticket-search.component';
import {HttpClientModule} from '@angular/common/http';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
