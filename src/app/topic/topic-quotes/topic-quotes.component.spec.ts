import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicQuotesComponent } from './topic-quotes.component';

describe('TopicQuotesComponent', () => {
  let component: TopicQuotesComponent;
  let fixture: ComponentFixture<TopicQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
