import { Component } from '@angular/core';
import { SeriesService } from '../../series.service';
import { TvshowCardComponent } from '../tvshow-card/tvshow-card.component';
import { StorageTvshow, Tvshow, TvshowResponse } from '../../types';
import { LOCALSTORAGE } from '../../storage';
import dayjs from 'dayjs';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-tvshow-list',
  standalone: true,
  imports: [TvshowCardComponent, NgxPaginationModule],
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TvshowListComponent {
  public titulo: string = '';
  public series: Tvshow[] = [];
  public page: number = 1;
  public pages: number = 0;
  constructor(private _seriesService:SeriesService) {

  }

  getTvShows(page: number = 1) {
    const storedTvshows:StorageTvshow = LOCALSTORAGE.get("series");

    if (!storedTvshows || this.isCachedTenMinutesAgo(storedTvshows?.items?.[0]?.date) || this.page !== 1) {
      this._seriesService.getTvShows(page).subscribe({
        next: (data: TvshowResponse) => {
          const fecha = dayjs().format('YYYY-MM-DD HH:mm:ss');
          this.pages = data.total_pages;
          const mappedResults = data.results.map((tvshow: Tvshow) => ({ ...tvshow, date: fecha }));
          this.series = mappedResults;
          if (this.page === 1) LOCALSTORAGE.set("series", { items: mappedResults, pages: data.total_pages });
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    } else {
      if (storedTvshows) {
        this.series = storedTvshows.items;
        this.pages = storedTvshows.pages;
      }
    }
  }

  ngOnInit(): void {
    this.titulo = 'Listado de series';
    this.getTvShows();
  }

  onPageChange(page: number) {
    this.page = page;
    this.getTvShows(page);
  }

  isCachedTenMinutesAgo(date?: string) {
    const now = dayjs();
    const cachedDatePlusTenMinutes = dayjs(date).add(10, 'minutes');
    return cachedDatePlusTenMinutes.isBefore(now);
  }
}
