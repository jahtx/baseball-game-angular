import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Player } from '../interfaces/player';
import { environment } from '../../environments/environment';
import { NGXLogger } from 'ngx-logger';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// const endpoint = 'http://localhost:4001/relay/player';
// const endpoint = 'http://localhost:8080/gwg/relay/player';
const endpoint = environment.serverUrl + '/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient, private logger: NGXLogger) {
    console.log('environment.serverUrl ' + environment.serverUrl);
  }

  addPlayer(player: any): Observable<Player> {
    return this.http.put<Player>(endpoint + '/save', player, httpOptions).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap(response => this.logger.log(`added player response: ` + response)),
      catchError(this.handleError<Player>())
    );
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(endpoint + '/fetchAll').pipe(
      tap(() => this.logger.log('Fetch players')),
      catchError(this.handleError([]))
    );
  }

  getPlayer(id: number): Observable<Player> {
    const url = `${endpoint}/${id}`;
    return this.http.get<Player>(url).pipe(
      tap(_ => this.logger.log(`fetched player id=${id}`)),
      catchError(this.handleError<Player>())
    );
  }

  updatePlayer(id: string, player: any): Observable<any> {
    const url = `${endpoint}/save`;
    this.logger.log('player.service.ts , updatePlayer: ' + JSON.stringify(player));
    return this.http.put(url, player).pipe(
      tap(_ => this.logger.log(`updated player id=${id}`)),
      catchError(this.handleError<any>('updatePlayer'))
    );
  }

  deletePlayer(id: number): Observable<Player> {
    const url = `${endpoint}/delete/${id}`;
    return this.http.delete<Player>(url, httpOptions).pipe(
      tap(_ => this.logger.log(`deleted product id=${id}`)),
      catchError(this.handleError<Player>())
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
