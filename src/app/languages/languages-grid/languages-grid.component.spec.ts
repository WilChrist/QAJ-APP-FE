import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesGridComponent } from './languages-grid.component';

describe('LanguagesGridComponent', () => {
  let component: LanguagesGridComponent;
  let fixture: ComponentFixture<LanguagesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
