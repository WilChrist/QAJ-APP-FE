import { PageEvent } from '@angular/material';

export class Helper {

}
export class PaginatorConfigurable {
  // MatPaginator Inputs
  length: number;
  pageSize: number;
  pageSizeOptions: number[];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(length: number= 100, pageSize: number= 10, pageSizeOptions: number[]= [5, 10, 25, 100]) {
    this.length = length;
    this.pageSize = pageSize;
    this.pageSizeOptions = pageSizeOptions;
   }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
