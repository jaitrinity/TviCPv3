import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRadioAntennaComponent } from './view-radio-antenna.component';

describe('ViewRadioAntennaComponent', () => {
  let component: ViewRadioAntennaComponent;
  let fixture: ComponentFixture<ViewRadioAntennaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRadioAntennaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRadioAntennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
