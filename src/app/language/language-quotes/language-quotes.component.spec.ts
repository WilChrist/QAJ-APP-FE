import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageQuotesComponent } from './language-quotes.component';

describe('LanguageQuotesComponent', () => {
  let component: LanguageQuotesComponent;
  let fixture: ComponentFixture<LanguageQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
