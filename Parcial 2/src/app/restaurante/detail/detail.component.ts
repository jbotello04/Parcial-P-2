import { Component, Input } from '@angular/core';
import { Restaurante } from '../restaurante';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  @Input() objectDetail!: Restaurante;
}
