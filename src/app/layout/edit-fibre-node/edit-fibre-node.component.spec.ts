import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFibreNodeComponent } from './edit-fibre-node.component';

describe('EditFibreNodeComponent', () => {
  let component: EditFibreNodeComponent;
  let fixture: ComponentFixture<EditFibreNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFibreNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFibreNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
