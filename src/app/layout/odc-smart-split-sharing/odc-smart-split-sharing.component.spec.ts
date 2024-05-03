import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcSmartSplitSharingComponent } from './odc-smart-split-sharing.component';

describe('OdcSmartSplitSharingComponent', () => {
  let component: OdcSmartSplitSharingComponent;
  let fixture: ComponentFixture<OdcSmartSplitSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdcSmartSplitSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdcSmartSplitSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
