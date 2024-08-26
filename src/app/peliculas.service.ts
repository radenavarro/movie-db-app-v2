import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from './types';
import { API_KEY } from '../../env';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey = API_KEY;
  constructor(private http: HttpClient) { }

  public getFilms(): Observable<any> {
    return this.http.get<MovieResponse>('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey);
  }

  public getFilm(id: number): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.apiKey);
  }
}
