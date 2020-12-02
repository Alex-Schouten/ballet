import {Injectable} from '@angular/core';
import {Ticket} from './tickets_model/ticket';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TicketService {

  private ticketUrl = 'https://my-json-server.typicode.com/weareallamazingpeople/angularfun/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient) {
  }

  /** GET heroes from the server */
  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketUrl)
      .pipe(
        tap(_ => console.log('fetched tickets')),
        catchError(this.handleError<Ticket[]>('getTickets', []))
      );
  }

  // /** GET hero by id. Return `undefined` when id not found */
  // getTicketNo404<Data>(id: number): Observable<Ticket> {
  //   const url = `${this.ticketUrl}/?id=${id}`;
  //   return this.http.get<Ticket[]>(url)
  //     .pipe(
  //       map(tickets => tickets[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} ticket id=${id}`);
  //       }),
  //       catchError(this.handleError<Ticket>(`getTicket id=${id}`))
  //     );
  // }

  // /** GET ticket by id. Will 404 if id not found */
  getTicket(id: number): Observable<Ticket> {
    const url = `${this.ticketUrl}/${id}`;
    return this.http.get<Ticket>(url).pipe(
      tap(_ => console.log(`fetched ticket id=${id}`)),
      catchError(this.handleError<Ticket>(`getTicket id=${id}`))
    );
  }

  searchTickets(term: string): Observable<Ticket[]> {
    if (!term.trim()) {
      // if not search term, return empty ticket array.
      return of([]);
    }
    return this.http.get<Ticket[]>(`${this.ticketUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        console.log(`found tickets matching "${term}"`) :
        console.log(`no tickets matching "${term}"`)),
      catchError(this.handleError<Ticket[]>('searchTickets', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new ticket to the server */
  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.ticketUrl, ticket, this.httpOptions).pipe(
      tap((newTicket: Ticket) => console.log(`added ticket w/ id=${newTicket.id}`)),
      catchError(this.handleError<Ticket>('addTicket'))
    );
  }

  /** DELETE: delete the ticket from the server */
  deleteTicket(ticket: Ticket | number): Observable<Ticket> {
    const id = typeof ticket === 'number' ? ticket : ticket.id;
    const url = `${this.ticketUrl}/${id}`;

    return this.http.delete<Ticket>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted ticket id=${id}`)),
      catchError(this.handleError<Ticket>('deleteTicket'))
    );
  }

  // /** PUT: update the ticket on the server */
  // updateTicket(ticket: Ticket): Observable<any> {
  //   return this.http.put(this.ticketUrl, ticket, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated ticket id=${ticket.id}`)),
  //     catchError(this.handleError<any>('updateTicket'))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
