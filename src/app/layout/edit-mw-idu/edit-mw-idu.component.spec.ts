import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMwIduComponent } from './edit-mw-idu.component';

describe('EditMwIduComponent', () => {
  let component: EditMwIduComponent;
  let fixture: ComponentFixture<EditMwIduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMwIduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMwIduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
