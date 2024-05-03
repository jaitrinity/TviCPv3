import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdscComponent } from './odsc.component';

describe('OdscComponent', () => {
  let component: OdscComponent;
  let fixture: ComponentFixture<OdscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
