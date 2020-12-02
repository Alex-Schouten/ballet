import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ticket } from './tickets_model/ticket';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const tickets = [
      {id: 1, name: 'La Triviata', summary: 'people die'},
      {id: 2, name: 'La Triviata', summary: 'people die'},
      {id: 3, name: 'La Triviata', summary: 'people die'},
      {id: 4, name: 'La Triviata', summary: 'people die'}
    ];
    return {tickets};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(tickets: Ticket[]): number {
    return tickets.length > 0 ? Math.max(...tickets.map(ticket => ticket.id)) + 1 : 11;
  }
}
