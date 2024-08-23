import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOtherEquipmentComponent } from './edit-other-equipment.component';

describe('EditOtherEquipmentComponent', () => {
  let component: EditOtherEquipmentComponent;
  let fixture: ComponentFixture<EditOtherEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOtherEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOtherEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
