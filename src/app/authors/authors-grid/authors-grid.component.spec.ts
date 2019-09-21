import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsGridComponent } from './authors-grid.component';

describe('AuthorsGridComponent', () => {
  let component: AuthorsGridComponent;
  let fixture: ComponentFixture<AuthorsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
