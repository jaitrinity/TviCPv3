import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTmaTmbComponent } from './edit-tma-tmb.component';

describe('EditTmaTmbComponent', () => {
  let component: EditTmaTmbComponent;
  let fixture: ComponentFixture<EditTmaTmbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTmaTmbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTmaTmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
