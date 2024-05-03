import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRadioAntennaComponent } from './edit-radio-antenna.component';

describe('EditRadioAntennaComponent', () => {
  let component: EditRadioAntennaComponent;
  let fixture: ComponentFixture<EditRadioAntennaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRadioAntennaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRadioAntennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
