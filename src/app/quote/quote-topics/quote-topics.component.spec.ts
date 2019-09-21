import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTopicsComponent } from './quote-topics.component';

describe('QuoteTopicsComponent', () => {
  let component: QuoteTopicsComponent;
  let fixture: ComponentFixture<QuoteTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
