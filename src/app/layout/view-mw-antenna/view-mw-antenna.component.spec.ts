import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMwAntennaComponent } from './view-mw-antenna.component';

describe('ViewMwAntennaComponent', () => {
  let component: ViewMwAntennaComponent;
  let fixture: ComponentFixture<ViewMwAntennaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMwAntennaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMwAntennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
