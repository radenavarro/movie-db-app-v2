import { Component } from '@angular/core';
import { SeriesService } from '../../series.service';
import { TvshowCardComponent } from '../tvshow-card/tvshow-card.component';
import { Tvshow, TvshowResponse } from '../../types';
import { LOCALSTORAGE } from '../../storage';
import dayjs from 'dayjs';


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
    const storedTvshows = LOCALSTORAGE.get("series");

    if (!storedTvshows || this.isCachedTenMinutesAgo(storedTvshows[0]?.date)) {
      this._seriesService.getTvShows().subscribe({
        next: (data: TvshowResponse) => {
          const fecha = dayjs().format('YYYY-MM-DD HH:mm:ss');
          const mappedResults = data.results.map((tvshow: Tvshow) => ({ ...tvshow, date: fecha }));
          this.series = mappedResults;
          LOCALSTORAGE.set("series", mappedResults);
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    } else {
      if (storedTvshows) {
        this.series = storedTvshows;
      }
    }
  }

  ngOnInit(): void {
    this.titulo = 'Listado de series';
    this.getTvShows();
  }

  isCachedTenMinutesAgo(date?: string) {
    const now = dayjs();
    const cachedDatePlusTenMinutes = dayjs(date).add(10, 'minutes');
    return cachedDatePlusTenMinutes.isBefore(now);
  }
}
