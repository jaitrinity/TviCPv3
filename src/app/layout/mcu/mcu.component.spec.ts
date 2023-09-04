import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McuComponent } from './mcu.component';

describe('McuComponent', () => {
  let component: McuComponent;
  let fixture: ComponentFixture<McuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
