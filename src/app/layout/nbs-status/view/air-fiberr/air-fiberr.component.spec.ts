import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFiberrComponent } from './air-fiberr.component';

describe('AirFiberrComponent', () => {
  let component: AirFiberrComponent;
  let fixture: ComponentFixture<AirFiberrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirFiberrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirFiberrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
