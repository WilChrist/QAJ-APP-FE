import { CarouselModule } from './carousel/carousel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    CarouselModule
  ],
  exports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    CarouselModule
  ]
})
export class SharedModule { }
