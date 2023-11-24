import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  objects: Restaurante[] = [];
  selected: boolean = false;
  selectedObject!: Restaurante;
  bestObject: Restaurante = new Restaurante(0, '', '', '', '', 0, 0, '');

  constructor(private myService: RestauranteService) { }

  ngOnInit() {
    this.getObjects();
  }

  getObjects(): void {
    this.myService.getObjects().subscribe((objects) => {
      this.objects = objects;
      this.getBestObject(objects);
    });
  }

  getBestObject(objects: Restaurante[]): void {
    let bestPunct: number = -1;

    objects.forEach(element => {
      if (bestPunct < element.rating) {
        bestPunct = element.rating;
        this.bestObject = element;
      }
    });
  }

  onSelected(myObject: Restaurante): void {
    this.selected = true;
    this.selectedObject = myObject;
    console.log(this.selectedObject.name);
  }

}
