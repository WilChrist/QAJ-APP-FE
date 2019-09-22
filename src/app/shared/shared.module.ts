import { CarouselModule } from './carousel/carousel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CommonModule,
    CarouselModule
  ]
})
export class SharedModule { }
