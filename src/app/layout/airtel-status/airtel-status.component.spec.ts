import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtelStatusComponent } from './airtel-status.component';

describe('AirtelStatusComponent', () => {
  let component: AirtelStatusComponent;
  let fixture: ComponentFixture<AirtelStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirtelStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtelStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
