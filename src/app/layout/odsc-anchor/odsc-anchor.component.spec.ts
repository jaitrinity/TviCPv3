import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdscAnchorComponent } from './odsc-anchor.component';

describe('OdscAnchorComponent', () => {
  let component: OdscAnchorComponent;
  let fixture: ComponentFixture<OdscAnchorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdscAnchorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdscAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
