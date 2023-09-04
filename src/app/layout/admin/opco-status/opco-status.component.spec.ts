import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoStatusComponent } from './opco-status.component';

describe('OpcoStatusComponent', () => {
  let component: OpcoStatusComponent;
  let fixture: ComponentFixture<OpcoStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcoStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
