import { Component, OnInit } from '@angular/core';
import { Ticket } from '../tickets_model/ticket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
