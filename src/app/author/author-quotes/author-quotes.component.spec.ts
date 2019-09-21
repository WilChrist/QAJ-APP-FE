import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorQuotesComponent } from './author-quotes.component';

describe('AuthorQuotesComponent', () => {
  let component: AuthorQuotesComponent;
  let fixture: ComponentFixture<AuthorQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
