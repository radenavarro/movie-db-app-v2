import { Component } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';
import { FilmCardComponent } from '../film-card/film-card.component';
import { Movie, MovieResponse } from '../../types';

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
    this._peliculasService.getFilms().subscribe({
      next: (data: MovieResponse) => {
        this.peliculas = data.results;
        console.log('listado de películas cargado');
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.titulo = 'Listado de películas';
    this.getFilms();
  }
}
