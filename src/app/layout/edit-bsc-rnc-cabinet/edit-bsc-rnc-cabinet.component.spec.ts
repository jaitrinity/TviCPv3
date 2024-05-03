import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBscRncCabinetComponent } from './edit-bsc-rnc-cabinet.component';

describe('EditBscRncCabinetComponent', () => {
  let component: EditBscRncCabinetComponent;
  let fixture: ComponentFixture<EditBscRncCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBscRncCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBscRncCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
