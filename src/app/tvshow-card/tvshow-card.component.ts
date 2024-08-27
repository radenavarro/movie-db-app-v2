import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tvshow-card',
  standalone: true,
  imports: [],
  templateUrl: './tvshow-card.component.html',
  styleUrl: './tvshow-card.component.css'
})
export class TvshowCardComponent {
  @Input() serie: any;
}
