import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Ticket } from '../tickets_model/ticket';
import { TicketService } from '../ticket.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: [ './ticket-detail.component.css' ]
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.ticketService.getTicket(id)
      .subscribe(ticket => this.ticket = ticket);
  }

}
