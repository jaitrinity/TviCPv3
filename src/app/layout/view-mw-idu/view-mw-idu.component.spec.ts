import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMwIduComponent } from './view-mw-idu.component';

describe('ViewMwIduComponent', () => {
  let component: ViewMwIduComponent;
  let fixture: ComponentFixture<ViewMwIduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMwIduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMwIduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
