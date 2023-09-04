import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBtsCabinetComponent } from './edit-bts-cabinet.component';

describe('EditBtsCabinetComponent', () => {
  let component: EditBtsCabinetComponent;
  let fixture: ComponentFixture<EditBtsCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBtsCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBtsCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
