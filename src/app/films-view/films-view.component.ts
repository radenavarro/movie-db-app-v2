import { Component } from '@angular/core';
import { FilmsListComponent } from '../films-list/films-list.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-films-view',
  standalone: true,
  imports: [FilmsListComponent, NavbarComponent, TitleComponent],
  templateUrl: './films-view.component.html',
  styleUrl: './films-view.component.css'
})
export class FilmsViewComponent {

}
