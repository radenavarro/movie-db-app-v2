import { Component } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';
import { FilmCardComponent } from '../film-card/film-card.component';
import { Movie, MovieResponse } from '../../types';
import { LOCALSTORAGE } from '../../storage';
import dayjs from 'dayjs';

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [FilmCardComponent],
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.css'
})
export class FilmsListComponent {
  public titulo: string = '';
  public peliculas: Movie[] = [];
  constructor(private _peliculasService: PeliculasService) {

  }

  getFilms() {
    const storedFilms = LOCALSTORAGE.get("films");
    // Sólo se pide a la API si no hay datos en el caché o los que hay tienen más de 10 minutos de antiguedad
    if (!storedFilms || this.isCachedTenMinutesAgo(storedFilms[0]?.date)) {
      this._peliculasService.getFilms().subscribe({
        next: (data: MovieResponse) => {
          const fecha = dayjs().format('YYYY-MM-DD HH:mm:ss');
          const mappedResults = data.results.map((movie: Movie) => ({ ...movie, date: fecha }));
          this.peliculas = mappedResults;
          
          LOCALSTORAGE.set("films", mappedResults);
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    } else {
      if (storedFilms) {
        this.peliculas = storedFilms;
      }
    }
  }

  ngOnInit(): void {
    this.titulo = 'Listado de películas';
    this.getFilms();
  }

  isCachedTenMinutesAgo(date?: string) {
    const now = dayjs();
    const cachedDatePlusTenMinutes = dayjs(date).add(10, 'minutes');
    return cachedDatePlusTenMinutes.isBefore(now);
  }
}
