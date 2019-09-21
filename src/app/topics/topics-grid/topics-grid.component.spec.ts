import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsGridComponent } from './topics-grid.component';

describe('TopicsGridComponent', () => {
  let component: TopicsGridComponent;
  let fixture: ComponentFixture<TopicsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
