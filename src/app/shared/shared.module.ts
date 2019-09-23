import { CarouselModule } from './carousel/carousel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    CarouselModule
  ],
  exports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    CarouselModule
  ]
})
export class SharedModule { }
