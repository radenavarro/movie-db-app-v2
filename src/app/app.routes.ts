import { Routes } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];
