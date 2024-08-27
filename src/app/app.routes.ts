import { Routes } from '@angular/router';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { HomeComponent } from './home/home.component';
import { FilmsViewComponent } from './films/films-view/films-view.component';
import { TvshowViewComponent } from './tvshows/tvshow-view/tvshow-view.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'films-list',
        component: FilmsViewComponent
    },
    {
        path: 'series-list',
        component: TvshowViewComponent
    }
];
