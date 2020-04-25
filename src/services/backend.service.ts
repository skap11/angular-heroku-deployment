import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Heroes} from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroesURL = "https://harshit-app-backend.herokuapp.com/fetch/name";
  constructor(private readonly http: HttpClient) {}

  getMessage(): Observable<Heroes> {
    return this.http.get<Heroes>(this.heroesURL)
  }
}
