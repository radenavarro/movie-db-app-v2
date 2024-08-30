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
