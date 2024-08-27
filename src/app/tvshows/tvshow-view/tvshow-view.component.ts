import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TvshowListComponent } from '../tvshow-list/tvshow-list.component';

@Component({
  selector: 'app-tvshow-view',
  standalone: true,
  imports: [TitleComponent, NavbarComponent, TvshowListComponent],
  templateUrl: './tvshow-view.component.html',
  styleUrl: './tvshow-view.component.css'
})
export class TvshowViewComponent {

}
