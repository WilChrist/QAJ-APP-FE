import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesGridComponent } from './quotes-grid.component';

describe('QuotesGridComponent', () => {
  let component: QuotesGridComponent;
  let fixture: ComponentFixture<QuotesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
