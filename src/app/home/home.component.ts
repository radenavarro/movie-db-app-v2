import { Component } from '@angular/core';
import { FilmsListComponent } from '../films-list/films-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilmsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
