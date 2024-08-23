import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFiberComponent } from './air-fiber.component';

describe('AirFiberComponent', () => {
  let component: AirFiberComponent;
  let fixture: ComponentFixture<AirFiberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirFiberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirFiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
