import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css',
})
export class FilmCardComponent {
  @Input() film: any;
  modalVisible: boolean = false;
  backgroundColor: string = 'rgb(0 0 0 / 0%)';

  showDialog = () => {
    this.modalVisible = true;
    this.backgroundColor = 'rgb(0 0 0 / 50%)';
  }

  closeDialog = (event: MouseEvent) => {
    event.stopPropagation();
    this.modalVisible = false;
    this.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
}
