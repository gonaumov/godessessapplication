import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goddess } from './goddess';

@Injectable({
  providedIn: 'root'
})
export class GoddessService {
  private godessesUrl = 'https://my-json-server.typicode.com/gonaumov/goddesses/list';
  constructor(private http: HttpClient) { }
  getGodesses(): Observable<Array<Goddess>> {
    return this.http.get<Array<Goddess>>(this.godessesUrl);
  }
  addGodess(name: string): Promise<{name: string}> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<{name: string}>(this.godessesUrl, {name}, httpOptions).toPromise();
  }
}
