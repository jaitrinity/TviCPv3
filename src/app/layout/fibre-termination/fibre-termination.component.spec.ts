import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibreTerminationComponent } from './fibre-termination.component';

describe('FibreTerminationComponent', () => {
  let component: FibreTerminationComponent;
  let fixture: ComponentFixture<FibreTerminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibreTerminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibreTerminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
