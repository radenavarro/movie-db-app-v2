import { Injectable } from '@angular/core';
import { API_KEY } from '../../env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiKey = API_KEY;
  constructor(private http: HttpClient) { }

  public getTvShows(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/tv/popular?api_key=' + this.apiKey);
  }

  public getTvShow(id: number): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/tv/' + id + '?api_key=' + this.apiKey);
  }
}
