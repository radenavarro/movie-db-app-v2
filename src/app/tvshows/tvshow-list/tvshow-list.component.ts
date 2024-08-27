import { Component } from '@angular/core';
import { SeriesService } from '../../series.service';
import { TvshowCardComponent } from '../tvshow-card/tvshow-card.component';
import { Tvshow, TvshowResponse } from '../../types';


@Component({
  selector: 'app-tvshow-list',
  standalone: true,
  imports: [TvshowCardComponent],
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TvshowListComponent {
  public titulo: string = '';
  public series: Tvshow[] = [];
  constructor(private _seriesService:SeriesService) {

  }

  getTvShows() {
    this._seriesService.getTvShows().subscribe({
      next: (data: TvshowResponse) => {
        this.series = data.results;
        console.log('listado de series cargado');
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.titulo = 'Listado de series';
    this.getTvShows();
  }
}
