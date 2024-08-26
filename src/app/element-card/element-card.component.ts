import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-card',
  standalone: true,
  imports: [],
  templateUrl: './element-card.component.html',
  styleUrl: './element-card.component.css'
})
export class ElementCardComponent {
  @Input() film: any;
}
