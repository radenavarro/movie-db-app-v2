import { Component } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';
import { FilmCardComponent } from '../film-card/film-card.component';
import { Movie, MovieResponse, StorageMovie } from '../../types';
import { LOCALSTORAGE } from '../../storage';
import dayjs from 'dayjs';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [FilmCardComponent, NgxPaginationModule],
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.css'
})
export class FilmsListComponent {
  public titulo: string = '';
  public peliculas: Movie[] = [];
  public page: number = 1;
  public pages: number = 0;
  constructor(private _peliculasService: PeliculasService) {

  }

  getFilms(page: number = 1) {
    const storedFilms: StorageMovie = LOCALSTORAGE.get("films");
    // Sólo se pide a la API si no hay datos en el caché o los que hay tienen más de 10 minutos de antiguedad. Si la página no es la primera, se obtiene de la API siempre
    if (!storedFilms || this.isCachedTenMinutesAgo(storedFilms.items[0]?.date) || this.page !== 1) {
      this._peliculasService.getFilms(page).subscribe({
        next: (data: MovieResponse) => {
          const fecha = dayjs().format('YYYY-MM-DD HH:mm:ss');
          this.pages = data.total_pages;
          const mappedResults = data.results.map((movie: Movie) => ({ ...movie, date: fecha }));
          this.peliculas = mappedResults;
          
          if (this.page === 1) LOCALSTORAGE.set("films", {items: mappedResults, pages: data.total_pages});
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    } else {
      if (storedFilms) {
        this.peliculas = storedFilms.items;
        this.pages = storedFilms.pages;
      }
    }
  }

  ngOnInit(): void {
    this.titulo = 'Listado de películas';
    this.getFilms();
  }

  onPageChange(page: number){
    this.page = page;
    this.getFilms(page);
  }

  isCachedTenMinutesAgo(date?: string):boolean {
    const now = dayjs();
    const cachedDatePlusTenMinutes = dayjs(date).add(10, 'minutes');
    return cachedDatePlusTenMinutes.isBefore(now);
  }
}
