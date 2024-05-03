import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdscSharingComponent } from './odsc-sharing.component';

describe('OdscSharingComponent', () => {
  let component: OdscSharingComponent;
  let fixture: ComponentFixture<OdscSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdscSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdscSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
