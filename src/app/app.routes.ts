import { Routes } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import { HomeComponent } from './home/home.component';
import { FilmsViewComponent } from './films-view/films-view.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'films-list',
        component: FilmsViewComponent
    }
];
