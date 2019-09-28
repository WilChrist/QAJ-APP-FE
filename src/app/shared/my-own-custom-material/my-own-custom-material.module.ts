import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatTableModule,
  MatBadgeModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTableModule,
    MatBadgeModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTableModule,
    MatBadgeModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
})
export class MyOwnCustomMaterialModule { }
