import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { League } from '../interfaces/league';
import { environment } from '../../environments/environment';
import { NGXLogger } from 'ngx-logger';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// const endpoint = 'http://localhost:4001/relay/league';
// const endpoint = 'http://localhost:8080/gwg/relay/league';
const endpoint = environment.serverUrl + '/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  constructor(private http: HttpClient, private logger: NGXLogger) {}

  addLeague(league: any): Observable<League> {
    return this.http.put<League>(endpoint + '/save', league, httpOptions).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap(response => this.logger.log(`added league response: ` + response)),
      catchError(this.handleError<League>())
    );
  }

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(endpoint + '/fetchAll').pipe(
      tap(() => this.logger.log('Fetch leagues')),
      catchError(this.handleError([]))
    );
  }

  getLeague(id: number): Observable<League> {
    const url = `${endpoint}/${id}`;
    return this.http.get<League>(url).pipe(
      tap(_ => this.logger.log(`fetched league id=${id}`)),
      catchError(this.handleError<League>())
    );
  }

  updateLeague(id: string, league: any): Observable<any> {
    const url = `${endpoint}/save`;
    this.logger.log('league.service.ts , updateLeague: ' + JSON.stringify(league));
    return this.http.put(url, league).pipe(
      tap(_ => this.logger.log(`updated league id=${id}`)),
      catchError(this.handleError<any>('updateLeague'))
    );
  }

  deleteLeague(id: number): Observable<League> {
    const url = `${endpoint}/delete/${id}`;
    return this.http.delete<League>(url, httpOptions).pipe(
      tap(_ => this.logger.log(`deleted product id=${id}`)),
      catchError(this.handleError<League>())
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log('HANDLE ERROR FIRED');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
