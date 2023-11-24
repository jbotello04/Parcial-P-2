import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteComponent } from './restaurante.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RestauranteComponent, ListComponent, DetailComponent],
  exports: [RestauranteComponent, ListComponent, DetailComponent]
})
export class RestauranteModule { }
