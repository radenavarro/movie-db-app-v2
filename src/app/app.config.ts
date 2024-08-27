import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PeliculasService } from './peliculas.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { SeriesService } from './series.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    PeliculasService,
    SeriesService
  ]
};
