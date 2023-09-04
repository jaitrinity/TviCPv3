import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRruComponent } from './edit-rru.component';

describe('EditRruComponent', () => {
  let component: EditRruComponent;
  let fixture: ComponentFixture<EditRruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
