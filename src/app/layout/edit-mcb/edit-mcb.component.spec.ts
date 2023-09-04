import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMcbComponent } from './edit-mcb.component';

describe('EditMcbComponent', () => {
  let component: EditMcbComponent;
  let fixture: ComponentFixture<EditMcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
