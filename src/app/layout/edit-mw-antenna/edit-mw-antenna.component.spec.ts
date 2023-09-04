import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMwAntennaComponent } from './edit-mw-antenna.component';

describe('EditMwAntennaComponent', () => {
  let component: EditMwAntennaComponent;
  let fixture: ComponentFixture<EditMwAntennaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMwAntennaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMwAntennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
