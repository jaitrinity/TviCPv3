import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfAntennaComponent } from './rf-antenna.component';

describe('RfAntennaComponent', () => {
  let component: RfAntennaComponent;
  let fixture: ComponentFixture<RfAntennaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfAntennaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfAntennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
