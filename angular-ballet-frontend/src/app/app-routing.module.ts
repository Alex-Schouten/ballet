import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';
import { HomeComponent } from './home/home.component';
import {TicketDetailComponent} from './ticket-detail/ticket-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'detail/:id', component: TicketDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
