import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbrComponent } from './ubr.component';

describe('UbrComponent', () => {
  let component: UbrComponent;
  let fixture: ComponentFixture<UbrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
