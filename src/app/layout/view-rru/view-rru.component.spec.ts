import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRruComponent } from './view-rru.component';

describe('ViewRruComponent', () => {
  let component: ViewRruComponent;
  let fixture: ComponentFixture<ViewRruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
