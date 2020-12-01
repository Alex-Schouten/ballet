import { Component, OnInit } from '@angular/core';

import { Ticket } from '../tickets_model/ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets!: Ticket[];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets()
      .subscribe(tickets => this.tickets = tickets);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.ticketService.addTicket({ name } as Ticket)
      .subscribe(ticket => {
        this.tickets.push(ticket);
      });
  }

  delete(ticket: Ticket): void {
    this.tickets = this.tickets.filter(h => h !== ticket);
    this.ticketService.deleteTicket(ticket).subscribe();
  }

}

