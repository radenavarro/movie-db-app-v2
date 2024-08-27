import { Component } from '@angular/core';
import { FilmsListComponent } from '../films/films-list/films-list.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilmsListComponent, NavbarComponent, TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
