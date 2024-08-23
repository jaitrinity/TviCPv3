import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOtherEquipmentComponent } from './view-other-equipment.component';

describe('ViewOtherEquipmentComponent', () => {
  let component: ViewOtherEquipmentComponent;
  let fixture: ComponentFixture<ViewOtherEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOtherEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOtherEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
